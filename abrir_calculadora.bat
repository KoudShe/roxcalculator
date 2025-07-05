@echo off
title Calculadora XP Ragnarok X - Professional Edition
echo.
echo ========================================
echo    CALCULADORA XP RAGNAROK X
echo      Professional Edition
echo ========================================
echo.
echo Escolha uma opção:
echo.
echo [1] Versão HTML (Navegador) - Recomendada
echo [2] Versão Python (Desktop)
echo.
set /p choice="Digite sua escolha (1 ou 2): "

if "%choice%"=="1" (
    echo.
    echo Abrindo calculadora no navegador...
    start "" "%~dp0index.html"
    echo ✅ Calculadora aberta com sucesso!
) else if "%choice%"=="2" (
    echo.
    echo Abrindo versão desktop...
    python "%~dp0ragnarok_xp_calculator.py"
    if errorlevel 1 (
        echo.
        echo ❌ Erro ao abrir versão Python.
        echo Abrindo versão HTML como alternativa...
        start "" "%~dp0index.html"
    )
) else (
    echo.
    echo Opção inválida. Abrindo versão HTML...
    start "" "%~dp0index.html"
)

echo.
echo 📋 Instruções de uso:
echo - Selecione a categoria do monstro
echo - Escolha o monstro desejado
echo - Digite o tempo para matar (em segundos)
echo - Selecione o tipo de farm
echo - Clique em "CALCULAR XP"
echo.
echo 📝 NOVA FUNCIONALIDADE:
echo - Agora é possível EDITAR a XP dos monstros!
echo - Base de dados ampliada com +150 monstros
echo.
pause