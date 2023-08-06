sudo su -
apt update -y

apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release -y
    
mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
  
  apt-get update
  
  sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin docker-compose -y
  
  apt install git -y
  
  git clone https://github.com/soulmaster179/k6-grafana-influxdb-jenkins && cd k6-grafana-influxdb-jenkins
  
  docker-compose up -d influxdb grafana jenkins
  
  
  docker-compose run jenkins cat /var/jenkins_home/secrets/initialAdminPassword
  

/etc/systemd/system/docker-compose-app.service

[Unit]
Description=Docker Compose Application Service
Requires=docker.service
After=docker.service

[Service]
Type=oneshot
RemainAfterExit=yes
WorkingDirectory=/home/loadtest101/k6-grafana-influxdb-jenkins
ExecStart=docker-compose up -d influxdb grafana jenkins
ExecStop=docker-compose down
TimeoutStartSec=0

[Install]
WantedBy=multi-user.target
