# docker-kubernetes-tutorial
This repository contains code examples demonstrating basic concepts of Docker and Kubernetes. This project is created for educational purposes and aimed to help novice developers learn these tools.

**Contents**
- Installation
- Docker
- Kubernetes
-Installation

The first step to using this repository is cloning the repository to your local file system. You can use a git client or download the ZIP archive and extract it to the desired directory.

```
git clone https://github.com/s31frc3/docker-kubernetes-tutorial
```
**Docker**

In the docker folder, you'll find a series of examples demonstrating basic Docker capabilities.

For example, you can run the first example by navigating to its directory and executing the following command:

```
cd docker-kubernetes-tutorial/example-01
docker build .
docker exec -it example-01 sh
```

You can execute each example with the following:

```
cd docker-kubernetes-tutorial/example-01
kubectl apply -f deployment.yaml
```

**Getting Help**
If you encounter any issues while working with this repository, please create a discussion or issue on GitHub so that we can assist you.
