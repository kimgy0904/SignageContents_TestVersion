export PATH=$PATH:$NPM_PATH

echo $PATH

sleep 5s

cd /root/LivingLab-CMS-IDLE_boeun/Client/client_react

npm start &

cd ../../

python3 ShelterUpdator.py &
# python3 server.py &

cd Server/

python3 server.py
#python3 ShelterUpdator.py
