@echo off
echo.
echo ========================================
echo   TALENDOX DATABASE KURULUMU
echo ========================================
echo.

echo [1/3] Node modules yukleniyor...
call npm install
echo.
echo Node modules yuklendi!
echo.

echo [2/3] Prisma client olusturuluyor...
call npx prisma generate
echo.
echo Prisma client olusturuldu!
echo.

echo [3/3] Database tablolari olusturuluyor...
call npx prisma db push
echo.
echo Database tablolari olusturuldu!
echo.

echo ========================================
echo   KURULUM TAMAMLANDI!
echo ========================================
echo.
echo Siteniz: https://jobportal-one-psi.vercel.app
echo Admin paneli: https://jobportal-one-psi.vercel.app/admin/login
echo.
pause
