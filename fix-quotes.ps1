# PowerShell script to fix unescaped quotes in location pages

$files = @(
    "app/locations/al-ahsa/page.tsx",
    "app/locations/al-haditha/page.tsx",
    "app/locations/al-hofuf/page.tsx",
    "app/locations/al-jouf/page.tsx",
    "app/locations/al-namas/page.tsx",
    "app/locations/al-qunfudhah/page.tsx",
    "app/locations/arar/page.tsx",
    "app/locations/dammam/page.tsx",
    "app/locations/duba/page.tsx",
    "app/locations/hail/page.tsx",
    "app/locations/jazan/page.tsx",
    "app/locations/madinah/page.tsx",
    "app/locations/majmaah/page.tsx",
    "app/locations/najran/page.tsx",
    "app/locations/neom/page.tsx",
    "app/locations/qurayyat/page.tsx",
    "app/locations/rabigh/page.tsx",
    "app/locations/riyadh/page.tsx",
    "app/locations/turaif/page.tsx",
    "app/locations/unaizah/page.tsx"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "Processing $file..."
        $content = Get-Content $file -Raw
        
        # Replace unescaped single quotes with &apos;
        $content = $content -replace "([^&])(')", '$1&apos;'
        
        # Fix double quotes in JSX text (not in attributes)
        # This is trickier - we need to be careful not to replace quotes in attributes
        
        Set-Content $file -Value $content -NoNewline
        Write-Host "Fixed $file"
    }
}

Write-Host "Done!"
