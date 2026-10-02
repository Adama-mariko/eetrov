# Télécharge les visuels Wix (sites client) vers static/media — relancer si les sites changent.
$ErrorActionPreference = 'Stop'
$out = Join-Path $PSScriptRoot '..\static\media'
New-Item -ItemType Directory -Force -Path $out | Out-Null

$urls = @{
  'hero.jpg'      = 'https://static.wixstatic.com/media/b56b91_6aa11af2ad9348a8b6377de299f8ce78~mv2.jpg/v1/fill/w_1920,h_1080,fp_0.50_0.50,q_90/b56b91_6aa11af2ad9348a8b6377de299f8ce78~mv2.jpg'
  'why.jpg'       = 'https://static.wixstatic.com/media/b56b91_add3840b856547df8cb4e19eeae90aa1~mv2.jpg/v1/fill/w_1200,h_1500,al_c,q_90/b56b91_add3840b856547df8cb4e19eeae90aa1~mv2.jpg'
  'partner.jpg'   = 'https://static.wixstatic.com/media/b56b91_02447123d50b4369a2f949a7dbc39f1f~mv2.png/v1/fill/w_1400,h_900,al_c,q_90/b56b91_02447123d50b4369a2f949a7dbc39f1f~mv2.png'
  'cabinet.jpg'   = 'https://static.wixstatic.com/media/b56b91_11e09ea3af3a47cd8af4cfbae1a0a389~mv2.jpeg/v1/fill/w_1400,h_900,al_c,q_90/b56b91_11e09ea3af3a47cd8af4cfbae1a0a389~mv2.jpeg'
  'ong.jpg'       = 'https://static.wixstatic.com/media/b56b91_a9930cce403f48838e51a5ef2f8b85c6~mv2.jpeg/v1/fill/w_1400,h_900,al_c,q_90/b56b91_a9930cce403f48838e51a5ef2f8b85c6~mv2.jpeg'
  'eetroov.jpg'   = 'https://static.wixstatic.com/media/b56b91_e4f09b4b9c1d4cf38c6cf6e0454ec07f~mv2.jpg/v1/fill/w_1400,h_900,al_c,q_90/b56b91_e4f09b4b9c1d4cf38c6cf6e0454ec07f~mv2.jpg'
  'service-1.jpg' = 'https://static.wixstatic.com/media/b56b91_d371219c973e4799a1861f26b36c780b~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_90/b56b91_d371219c973e4799a1861f26b36c780b~mv2.jpg'
  'service-2.jpg' = 'https://static.wixstatic.com/media/b56b91_e4f09b4b9c1d4cf38c6cf6e0454ec07f~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_90/b56b91_e4f09b4b9c1d4cf38c6cf6e0454ec07f~mv2.jpg'
  'service-3.jpg' = 'https://static.wixstatic.com/media/b56b91_b747ee4163b14bfcb0e3d880026374cb~mv2.jpg/v1/crop/x_3775,y_0,w_4261,h_5315/fill/w_1200,h_800,al_c,q_90/Faire%20un%20don.jpg'
  'service-4.jpg' = 'https://static.wixstatic.com/media/b56b91_9eaf6ff4d8364179a8acbe48dada32c0~mv2.png/v1/fill/w_1200,h_800,al_c,q_90/b56b91_9eaf6ff4d8364179a8acbe48dada32c0~mv2.png'
  'service-5.jpg' = 'https://static.wixstatic.com/media/b56b91_2b5994b9b56a491cb04467d71bc10f19~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_90/b56b91_2b5994b9b56a491cb04467d71bc10f19~mv2.jpg'
  'service-6.jpg' = 'https://static.wixstatic.com/media/b56b91_e31806acbfe642459318d28dcc00cba6~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_90/b56b91_e31806acbfe642459318d28dcc00cba6~mv2.jpg'
  'program-1.jpg' = 'https://static.wixstatic.com/media/b56b91_ae93c9af0eac4f56a6a4fbc154b62214~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_90/b56b91_ae93c9af0eac4f56a6a4fbc154b62214~mv2.jpg'
  'program-2.jpg' = 'https://static.wixstatic.com/media/b56b91_8569081b13de457aadd53970a829aa5c~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_90/b56b91_8569081b13de457aadd53970a829aa5c~mv2.jpg'
  'program-3.jpg' = 'https://static.wixstatic.com/media/b56b91_a9930cce403f48838e51a5ef2f8b85c6~mv2.jpeg/v1/fill/w_1200,h_800,al_c,q_90/b56b91_a9930cce403f48838e51a5ef2f8b85c6~mv2.jpeg'
}

foreach ($entry in $urls.GetEnumerator()) {
  Write-Host "Downloading $($entry.Key) ..."
  Invoke-WebRequest -Uri $entry.Value -OutFile (Join-Path $out $entry.Key) -UseBasicParsing
}
Write-Host "Done: $out"
