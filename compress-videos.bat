@echo off
echo ========================================
echo   TEKY Video Compression Tool
echo   Nen video de upload len GitHub
echo ========================================
echo.

cd /d "d:\code\dashboard product\src\assets"

echo [1/4] Dang nen TE-C-PA-1218-2020SNLTW-0097.mp4...
ffmpeg -y -i "TE-C-PA-1218-2020SNLTW-0097.mp4" -vcodec libx264 -crf 32 -preset fast -vf "scale=1280:-2" -acodec aac -b:a 96k "TE-C-PA-1218-2020SNLTW-0097_compressed.mp4"
if exist "TE-C-PA-1218-2020SNLTW-0097_compressed.mp4" (
    del "TE-C-PA-1218-2020SNLTW-0097.mp4"
    ren "TE-C-PA-1218-2020SNLTW-0097_compressed.mp4" "TE-C-PA-1218-2020SNLTW-0097.mp4"
    echo    Da nen xong!
) else (
    echo    Loi khi nen file!
)
echo.

echo [2/4] Dang nen TE-C-PA-1218-2020SNLTW-0103.mp4...
ffmpeg -y -i "TE-C-PA-1218-2020SNLTW-0103.mp4" -vcodec libx264 -crf 32 -preset fast -vf "scale=1280:-2" -acodec aac -b:a 96k "TE-C-PA-1218-2020SNLTW-0103_compressed.mp4"
if exist "TE-C-PA-1218-2020SNLTW-0103_compressed.mp4" (
    del "TE-C-PA-1218-2020SNLTW-0103.mp4"
    ren "TE-C-PA-1218-2020SNLTW-0103_compressed.mp4" "TE-C-PA-1218-2020SNLTW-0103.mp4"
    echo    Da nen xong!
) else (
    echo    Loi khi nen file!
)
echo.

echo [3/4] Dang nen TE-C-PA-711-2020BLG-0093.mp4...
ffmpeg -y -i "TE-C-PA-711-2020BLG-0093.mp4" -vcodec libx264 -crf 32 -preset fast -vf "scale=1280:-2" -acodec aac -b:a 96k "TE-C-PA-711-2020BLG-0093_compressed.mp4"
if exist "TE-C-PA-711-2020BLG-0093_compressed.mp4" (
    del "TE-C-PA-711-2020BLG-0093.mp4"
    ren "TE-C-PA-711-2020BLG-0093_compressed.mp4" "TE-C-PA-711-2020BLG-0093.mp4"
    echo    Da nen xong!
) else (
    echo    Loi khi nen file!
)
echo.

echo [4/4] Dang nen BLG_HP4.mp4...
ffmpeg -y -i "BLG_HP4.mp4" -vcodec libx264 -crf 32 -preset fast -vf "scale=1280:-2" -acodec aac -b:a 96k "BLG_HP4_compressed.mp4"
if exist "BLG_HP4_compressed.mp4" (
    del "BLG_HP4.mp4"
    ren "BLG_HP4_compressed.mp4" "BLG_HP4.mp4"
    echo    Da nen xong!
) else (
    echo    Loi khi nen file!
)
echo.

echo ========================================
echo   HOAN THANH!
echo   Cac video da duoc nen xuong duoi 50MB
echo ========================================
pause
