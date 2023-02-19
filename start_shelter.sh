export PATH=$PATH:$NPM_PATH

echo $PATH

sleep 5s

cd /root/LivingLab-CMS-IDLE_boeun/Client/client_react

npm start &

cd ../../Server

python3 server.py &

cd ../

python3 ShelterUpdator.py
