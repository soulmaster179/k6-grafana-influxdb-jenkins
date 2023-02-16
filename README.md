#  k6-grafana-influxdb-docker-compose

Project based on the design provided on the [repository](https://github.com/luketn/docker-k6-grafana-influxdb).

This is a repository for designing dashboards and scenarios describing good practices in K6.

## TODO

- [ ] Check InfluxDB limits (requests):

```bash
ERRO[0079] Couldn't write stats                          error="{\"error\":\"Request Entity Too Large\"}\n" output=InfluxDBv1
```

Occurs on high load (xk6-kafka scripts on > 5 VUs).

- [ ] Check error:

```bash
WARN[0005] The flush operation took higher than the expected set push interval. If you see this message multiple times then the setup or configuration need to be adjusted to achieve a sustainable rate.  output=InfluxDBv1 t=1.7028393s
```

Occurs on high load (xk6-kafka scripts on > 5 VUs).

https://community.k6.io/t/the-flush-operation-took-higher-than-the-expected-set-push-interval/2469

- [ ] Optimize data that is stored (in `tags`)




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
  
  apt-get update
  
  sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin docker-compose -y
  
  apt install git -y
  
  git clone https://github.com/soulmaster179/k6-grafana-influxdb-jenkins && cd k6-grafana-influxdb-jenkins
  
  docker-compose up -d influxdb grafana jenkins
  
  
  docker-compose run jenkins cat /var/jenkins_home/secrets/initialAdminPassword
  
