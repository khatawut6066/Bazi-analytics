param(
  [string]$OutputRoot = "outputs/bazi-analytics-github-pages/assets/audio"
)

Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$voices = $synth.GetInstalledVoices() | ForEach-Object { $_.VoiceInfo }
$thaiVoice = $voices | Where-Object { $_.Culture.Name -like "th-*" } | Select-Object -First 1
if (-not $thaiVoice) {
  Write-Warning "ไม่พบเสียงไทยใน Windows เครื่องนี้ จึงยังไม่ควรสร้างไฟล์ production เพราะสำเนียงจะไม่เหมาะกับเว็บ"
  Write-Host "ติดตั้ง Thai voice ใน Windows Settings > Time & language > Speech แล้วรันสคริปต์นี้ใหม่"
  $voices | Select-Object Name, @{Name='Culture';Expression={$_.Culture.Name}}, Gender, Age
  exit 1
}

New-Item -ItemType Directory -Force -Path $OutputRoot | Out-Null
$synth.SelectVoice($thaiVoice.Name)
$synth.Rate = -1
$synth.Volume = 100

$tracks = @(
  @{ File = "story-default-th.wav"; Text = "นี่คือเสียงสำรองของชีวิตบาจื่อ ใช้เมื่อเครื่องของคุณไม่รองรับเสียงอ่านอัตโนมัติ ข้อความสำคัญยังเปิดให้อ่านบนหน้าเว็บครบถ้วน" },
  @{ File = "story-growth-th.wav"; Text = "ช่วงฟ้าเปิดคือเวลาที่ชีวิตเริ่มเห็นทางชัดขึ้น ลองเลือกก้าวเล็กที่ทำได้จริง แล้วค่อย ๆ ให้ผลงานพูดแทนความกังวล" },
  @{ File = "story-resilience-th.wav"; Text = "ช่วงที่มีมรสุมไม่ได้แปลว่าชีวิตถอยหลัง บางครั้งมันคือจังหวะที่ใจได้เรียนรู้ว่าจะยืนให้นิ่งขึ้นอย่างไร" }
)

foreach ($track in $tracks) {
  $path = Join-Path $OutputRoot $track.File
  $synth.SetOutputToWaveFile($path)
  $synth.Speak($track.Text)
  $synth.SetOutputToNull()
  Write-Host "created $path"
}
