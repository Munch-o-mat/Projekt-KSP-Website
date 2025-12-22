$files = @('quellen.html', 'hilfe.html', 'kontakt.html', 'impressum.html', 'sonnensystem.html')

$replacements = @{
    'items-center' = 'items-c'
    'justify-between' = 'justify-b'
    'justify-center' = 'justify-c'
    'backdrop-blur-md' = 'blur-md'
    'backdrop-blur-sm' = 'blur-sm'
    'trans-colors' = 'tcol'
    'bg-grad-to-r' = 'bgr'
    'text-fg/80' = 'tfg'
    'border-white/10' = 'bw'
    'border-white/5' = 'bw5'
    'hover:text-prim' = 'h:tp'
    'leading-relaxed' = 'lr'
    'g-h:' = 'gh:'
}

foreach ($file in $files) {
    $content = Get-Content $file -Raw -Encoding UTF8
    foreach ($key in $replacements.Keys) {
        $content = $content -replace [regex]::Escape($key), $replacements[$key]
    }
    Set-Content $file -Value $content -NoNewline -Encoding UTF8
}

Write-Host "Updated $($files.Count) files"

