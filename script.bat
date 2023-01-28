Setlocal EnableDelayedExpansion
cd client\
call npm install
cd ..\
cd functions\
for  /d %%f in (*) do (
    cd %%f
    call npm install
    cd ..\
    )