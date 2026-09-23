@echo off
cd /d "%~dp0"
echo Unified BMS backend — pure Python
python -m pip install -r requirements.txt
python run.py
pause
