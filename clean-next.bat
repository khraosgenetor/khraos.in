@echo off
IF EXIST ".next" (
    echo Deleting .next folder...
    rmdir /s /q ".next"
    echo .next folder deleted.
) ELSE (
    echo .next folder does not exist.
)
pause
