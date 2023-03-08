export PATH=$PATH:$NPM_PATH

echo $PATH

# Migrate shelter_server DB

cd /root/LivingLab-ShelterServer/local_shelter_server

sleep 3s

python3 manage.py migrate # migrate database

#--------------------------

# Start IDLE Page
sleep 3s

cd /root/LivingLab-CMS-IDLE/Client/client_react

npm start &

#--------------------------

# Start ShelterUpdator script

cd ../../

python3 ShelterUpdator.py &
# python3 server.py &

#--------------------------

# Start Websocket publisher script

cd Server/

python3 server.py
#python3 ShelterUpdator.py
