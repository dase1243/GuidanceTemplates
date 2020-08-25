import React from "react";
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import HelpInfo from "./HelpInfo";
import TutorialStepper from "./TutorialStepper";

const users = [
    {
        "_id": "5f3ef6f3c190683b70d9d0c9",
        "username": "Henry",
        "pages": {
            "/": {
                "firstTimeVisit": true,
                "tutorials": [
                    {
                        "label": "Building a Workflow Template",
                        "currentStep": 0,
                        "numberOfSteps": 6,
                        "labels": [
                            "Create a WorkFlow Template",
                            "Provide a Cluster Configuration and associate it to the workflow template",
                            "Provide a job script, assign a unique step-id and associate it to the workflow template",
                            "Provide more jobs if required assigning unique step-id and associate them to workflow template",
                            "Finally , instantiate the workflow template i.e. execute the workflow template which would create the cluster, run the jobs and finally delete the cluster",
                        ],
                        "descriptions": [
                            "First we would need to create a bucket to store the job script that we need to execute. Let’s start by creating the environment variables and a GCS bucket. This bucket will be used to store the job files.",
                            "Now we will provide the cluster details and associate it to the workflow template. The below is a simple example of creating a cluster. You can read here for managed cluster and here for custom cluster to create a custom cluster by providing more granular parameters. In the below command , image parameter is very important because it sets the version of hadoop and spark. You can see the complete list here. Note that the below command will not actually create a cluster but it will associate the cluster creation step to the workflow template.",
                            "Now the next step is to assign the job script to the workflow template. Let’s first create a very simple pyspark script for our job. Please execute the below command. Copy the below content in the script and save the file. Please replace the bucket name appropriately. Save the file and lets upload it to the bucket that we have created.",
                            "Now we are done with our workflow template creation. We do not need to add delete cluster step. Since we have created it as managed-cluster , it will delete itself after the job execution is complete. Now let’s test by executing this workflow. We need to execute the below command to instantiate the workflow.",
                            "In case you are using any specific library in your pyspark job , the same needs to be included as part of cluster creation. Please see the 2 parameters i.e. metadata & initialization-actions that is added below which installs scipy package on each node when the cluster gets created. Similarly you can install other libraries as required.",
                        ]
                    }, {
                        "label": "Model Training using AI Platform",
                        "currentStep": 0,
                        "numberOfSteps": 5,
                        "labels": [
                            "Build a custom container",
                            "Create a bucket and upload the iris.csv file to it",
                            "Create the Dockerfile",
                            "Start our AI Platform Training Job",
                            "Monitor the job",
                        ],
                        "descriptions": [
                            "Build a custom container as per our requirement and publish this container to the container repository. This container will hold the specific framework that we need to train our model and the actual code of training the model.",
                            "Let’s assume that we have a specific requirement of scikit-learn version 0.20.3 and pandas as 0.24.2. Hence we will build a custom container with these specific version and that container will be passed to AI Platform Job for model training.",
                            "We will use Cloud Build to build the image and push it our project’s Container Registry. As we use the remote cloud service to build the image, we don’t need a local installation of Docker.",
                            "Use this image and start our AI Platform Training Job via below command. The different while using the custom container is that we don’t need to provide parameters package-path, module-name , runtime-version and python-version. All this are available within the custom container that we built above and instead we use the parameter master-image-uri which is pointing to image that we created which has the dependencies installed and the code also available.",
                            "You will observe below message once the job has been submitted.",
                        ],
                    },
                    {
                        "label": "Importing data into a dataset",
                        "currentStep": 0,
                        "numberOfSteps": 4,
                        "labels": [
                            "Creating a dataset",
                            "Importing data into a dataset",
                            "Training models",
                            "Schema review",
                        ],
                        "descriptions": [
                            "Begin the process of creating your dataset. Select Datasets, and then select New dataset. Enter the name of your dataset and specify the Region where the dataset will be created. Click Create dataset. The Import tab is displayed. You can now import your data.",
                            "If needed, select your dataset from list on the Datasets page to open its Import tab. Choose the import source for your data: BigQuery, Cloud Storage, or your local computer. Provide the information required. If you load your CSV files from your local computer, you must provide a Cloud Storage bucket. Your files are loaded to that bucket before they are imported into AutoML Tables. The files remain there after the data import unless you remove them. The bucket must be in the same location as your dataset. Learn more. Click Import to start the import process. When the import process finishes, the Train tab is displayed, and you are ready to train your model.",
                            "Click Train model to begin model training. Training a model can take several hours to complete depending on the size of the dataset and the training budget. You can close your browser window without affecting the training process. After the model is successfully trained, the Models tab shows high-level metrics for the model, such as precision and recall.",
                            "AutoML Tables infers the data type and whether a column is nullable for each column based on the original data type (if it was imported from BigQuery) and the values in the column. You should check each column and make sure it looks correct.",
                        ]
                    },
                    {
                        "label": "Working with AutoML",
                        "currentStep": 0,
                        "numberOfSteps": 3,
                        "labels": [
                            "Extracting frames from videos of objects ",
                            "Preparing a labelled CSV dataset and uploading it to Google Cloud Storage",
                            "Testing random images on the model",
                        ],
                        "descriptions": [
                            "Prepare a bucket to use for your project. But for everything, instead of using the console, I have done in Python. I have used Jupyter notebook to write the Python code.",
                            "For asynchronous data, we need to provide the call back function else it might throw an error. While preparing my code for importing, I was getting an error with code-504 which stated deadline exception. If you face such an error, you can mention timeout exclusively because by default time taken for the task is 60 secs. ",
                            "Check the statistics of your dataset where you can evaluate your data. If you think, you have got something wrong, you can make the necessary corrections and re-train your dataset once again before its finally prepared to be tested.",
                        ]
                    }]
            },
            "/home_check1": {
                "firstTimeVisit": false,
                "tutorials": [
                    {
                        "label": "Tutorial 1",
                        "currentStep": 0,
                        "numberOfSteps": 5,
                        "labels": [
                            "Identify your personal goals and values.",
                            "Pursue your hobbies and interests to make yourself more interesting.",
                            "Challenge the beliefs that you learned from others to find your truth.",
                            "Embrace your flaws because they make you who your are.",
                            "Silence your inner critic.",
                            "Try new things to get more experiences."
                        ],
                        "descriptions": [
                            "Make a list of the things that are really important to you. Next, consider the things you most want to achieve in your lifetime. Review these lists to figure out what you most value. Then, choose 1-3 personal goals that are important to you.",
                            "Think about the things you enjoy doing most, then figure out how you can include them in your life more.",
                            "You’ve probably absorbed a lot of rules about life from the people around you, like your parents, teachers, or religious leaders. Some of the beliefs will feel true for you, but others may not. Think about the beliefs you learned from others, then question whether or not they feel true for you. In some cases, you may want to talk to other people or do some research to learn more about the topic. Finally, adopt beliefs that fit with your personal values.",
                            "No one is perfect, and it’s okay to have flaws! Instead of looking at your flaws as a bad thing, view them as a balance that helps you recognize your best qualities. Then, try to stop criticizing yourself and focus on being your best self.",
                            "It’s likely that your inner critic is worried that people are going to judge you. That’s probably because you felt judged in the past. To quiet this voice, figure out what you’re afraid will happen if you just be yourself. Then, challenge those thoughts by focusing on what could go right and thinking about your strengths.",
                            "Your experiences make you more unique, so be open to trying new things. Attend local events and festivals, try out new hobbies, and sample new foods."
                        ]
                    }, {
                        "label": "Tutorial 2",
                        "currentStep": 0,
                        "numberOfSteps": 5,
                        "labels": [
                            "Tutorial 2, Step 1",
                            "Tutorial 2, Step 2",
                            "Tutorial 2, Step 3",
                            "Tutorial 2, Step 4",
                            "Tutorial 2, Step 5",
                        ],
                        "descriptions": [
                            "Tutorial 2, Step 1 Description",
                            "Tutorial 2, Step 2 Description",
                            "Tutorial 2, Step 3 Description",
                            "Tutorial 2, Step 4 Description",
                            "Tutorial 2, Step 5 Description",
                        ]
                    },
                    {
                        "label": "Tutorial 3",
                        "currentStep": 0,
                        "numberOfSteps": 4,
                        "labels": [
                            "Tutorial 3, Step 1",
                            "Tutorial 3, Step 2",
                            "Tutorial 3, Step 3",
                            "Tutorial 3, Step 4",
                        ],
                        "descriptions": [
                            "Tutorial 3, Step 1 Description",
                            "Tutorial 3, Step 2 Description",
                            "Tutorial 3, Step 3 Description",
                            "Tutorial 3, Step 4 Description",
                        ]
                    },
                    {
                        "label": "Tutorial 4",
                        "currentStep": 0,
                        "numberOfSteps": 3,
                        "labels": [
                            "Tutorial 4, Step 1",
                            "Tutorial 4, Step 2",
                            "Tutorial 4, Step 3",
                        ],
                        "descriptions": [
                            "Tutorial 4, Step 1 Description",
                            "Tutorial 4, Step 2 Description",
                            "Tutorial 4, Step 3 Description",
                        ]
                    }]
            },
            "/home_check2": {
                "firstTimeVisit": false,
                "tutorials": [
                    {
                        "label": "Tutorial 1",
                        "currentStep": 0,
                        "numberOfSteps": 5,
                        "labels": [
                            "Identify your personal goals and values.",
                            "Pursue your hobbies and interests to make yourself more interesting.",
                            "Challenge the beliefs that you learned from others to find your truth.",
                            "Embrace your flaws because they make you who your are.",
                            "Silence your inner critic.",
                            "Try new things to get more experiences."
                        ],
                        "descriptions": [
                            "Make a list of the things that are really important to you. Next, consider the things you most want to achieve in your lifetime. Review these lists to figure out what you most value. Then, choose 1-3 personal goals that are important to you.",
                            "Think about the things you enjoy doing most, then figure out how you can include them in your life more.",
                            "You’ve probably absorbed a lot of rules about life from the people around you, like your parents, teachers, or religious leaders. Some of the beliefs will feel true for you, but others may not. Think about the beliefs you learned from others, then question whether or not they feel true for you. In some cases, you may want to talk to other people or do some research to learn more about the topic. Finally, adopt beliefs that fit with your personal values.",
                            "No one is perfect, and it’s okay to have flaws! Instead of looking at your flaws as a bad thing, view them as a balance that helps you recognize your best qualities. Then, try to stop criticizing yourself and focus on being your best self.",
                            "It’s likely that your inner critic is worried that people are going to judge you. That’s probably because you felt judged in the past. To quiet this voice, figure out what you’re afraid will happen if you just be yourself. Then, challenge those thoughts by focusing on what could go right and thinking about your strengths.",
                            "Your experiences make you more unique, so be open to trying new things. Attend local events and festivals, try out new hobbies, and sample new foods."
                        ]
                    }, {
                        "label": "Tutorial 2",
                        "currentStep": 0,
                        "numberOfSteps": 5,
                        "labels": [
                            "Tutorial 2, Step 1",
                            "Tutorial 2, Step 2",
                            "Tutorial 2, Step 3",
                            "Tutorial 2, Step 4",
                            "Tutorial 2, Step 5",
                        ],
                        "descriptions": [
                            "Tutorial 2, Step 1 Description",
                            "Tutorial 2, Step 2 Description",
                            "Tutorial 2, Step 3 Description",
                            "Tutorial 2, Step 4 Description",
                            "Tutorial 2, Step 5 Description",
                        ]
                    },
                    {
                        "label": "Tutorial 3",
                        "currentStep": 0,
                        "numberOfSteps": 4,
                        "labels": [
                            "Tutorial 3, Step 1",
                            "Tutorial 3, Step 2",
                            "Tutorial 3, Step 3",
                            "Tutorial 3, Step 4",
                        ],
                        "descriptions": [
                            "Tutorial 3, Step 1 Description",
                            "Tutorial 3, Step 2 Description",
                            "Tutorial 3, Step 3 Description",
                            "Tutorial 3, Step 4 Description",
                        ]
                    },
                    {
                        "label": "Tutorial 4",
                        "currentStep": 0,
                        "numberOfSteps": 3,
                        "labels": [
                            "Tutorial 4, Step 1",
                            "Tutorial 4, Step 2",
                            "Tutorial 4, Step 3",
                        ],
                        "descriptions": [
                            "Tutorial 4, Step 1 Description",
                            "Tutorial 4, Step 2 Description",
                            "Tutorial 4, Step 3 Description",
                        ]
                    }]
            }
        },
        "__v": 0
    },
    {
        "_id": "5f3ef758c190683b70d9d0ca",
        "username": "Konrad",
        "pages": {
            "/": {
                "firstTimeVisit": true,
                "tutorials": [
                    {
                        "label": "Building a Workflow Template",
                        "currentStep": 0,
                        "numberOfSteps": 6,
                        "labels": [
                            "Create a WorkFlow Template",
                            "Provide a Cluster Configuration and associate it to the workflow template",
                            "Provide a job script, assign a unique step-id and associate it to the workflow template",
                            "Provide more jobs if required assigning unique step-id and associate them to workflow template",
                            "Finally , instantiate the workflow template i.e. execute the workflow template which would create the cluster, run the jobs and finally delete the cluster",
                        ],
                        "descriptions": [
                            "First we would need to create a bucket to store the job script that we need to execute. Let’s start by creating the environment variables and a GCS bucket. This bucket will be used to store the job files.",
                            "Now we will provide the cluster details and associate it to the workflow template. The below is a simple example of creating a cluster. You can read here for managed cluster and here for custom cluster to create a custom cluster by providing more granular parameters. In the below command , image parameter is very important because it sets the version of hadoop and spark. You can see the complete list here. Note that the below command will not actually create a cluster but it will associate the cluster creation step to the workflow template.",
                            "Now the next step is to assign the job script to the workflow template. Let’s first create a very simple pyspark script for our job. Please execute the below command. Copy the below content in the script and save the file. Please replace the bucket name appropriately. Save the file and lets upload it to the bucket that we have created.",
                            "Now we are done with our workflow template creation. We do not need to add delete cluster step. Since we have created it as managed-cluster , it will delete itself after the job execution is complete. Now let’s test by executing this workflow. We need to execute the below command to instantiate the workflow.",
                            "In case you are using any specific library in your pyspark job , the same needs to be included as part of cluster creation. Please see the 2 parameters i.e. metadata & initialization-actions that is added below which installs scipy package on each node when the cluster gets created. Similarly you can install other libraries as required.",
                        ]
                    }, {
                        "label": "Model Training using AI Platform",
                        "currentStep": 0,
                        "numberOfSteps": 5,
                        "labels": [
                            "Build a custom container",
                            "Create a bucket and upload the iris.csv file to it",
                            "Create the Dockerfile",
                            "Start our AI Platform Training Job",
                            "Monitor the job",
                        ],
                        "descriptions": [
                            "Build a custom container as per our requirement and publish this container to the container repository. This container will hold the specific framework that we need to train our model and the actual code of training the model.",
                            "Let’s assume that we have a specific requirement of scikit-learn version 0.20.3 and pandas as 0.24.2. Hence we will build a custom container with these specific version and that container will be passed to AI Platform Job for model training.",
                            "We will use Cloud Build to build the image and push it our project’s Container Registry. As we use the remote cloud service to build the image, we don’t need a local installation of Docker.",
                            "Use this image and start our AI Platform Training Job via below command. The different while using the custom container is that we don’t need to provide parameters package-path, module-name , runtime-version and python-version. All this are available within the custom container that we built above and instead we use the parameter master-image-uri which is pointing to image that we created which has the dependencies installed and the code also available.",
                            "You will observe below message once the job has been submitted.",
                        ],
                    },
                    {
                        "label": "Importing data into a dataset",
                        "currentStep": 0,
                        "numberOfSteps": 4,
                        "labels": [
                            "Creating a dataset",
                            "Importing data into a dataset",
                            "Training models",
                            "Schema review",
                        ],
                        "descriptions": [
                            "Begin the process of creating your dataset. Select Datasets, and then select New dataset. Enter the name of your dataset and specify the Region where the dataset will be created. Click Create dataset. The Import tab is displayed. You can now import your data.",
                            "If needed, select your dataset from list on the Datasets page to open its Import tab. Choose the import source for your data: BigQuery, Cloud Storage, or your local computer. Provide the information required. If you load your CSV files from your local computer, you must provide a Cloud Storage bucket. Your files are loaded to that bucket before they are imported into AutoML Tables. The files remain there after the data import unless you remove them. The bucket must be in the same location as your dataset. Learn more. Click Import to start the import process. When the import process finishes, the Train tab is displayed, and you are ready to train your model.",
                            "Click Train model to begin model training. Training a model can take several hours to complete depending on the size of the dataset and the training budget. You can close your browser window without affecting the training process. After the model is successfully trained, the Models tab shows high-level metrics for the model, such as precision and recall.",
                            "AutoML Tables infers the data type and whether a column is nullable for each column based on the original data type (if it was imported from BigQuery) and the values in the column. You should check each column and make sure it looks correct.",
                        ]
                    },
                    {
                        "label": "Working with AutoML",
                        "currentStep": 0,
                        "numberOfSteps": 3,
                        "labels": [
                            "Extracting frames from videos of objects ",
                            "Preparing a labelled CSV dataset and uploading it to Google Cloud Storage",
                            "Testing random images on the model",
                        ],
                        "descriptions": [
                            "Prepare a bucket to use for your project. But for everything, instead of using the console, I have done in Python. I have used Jupyter notebook to write the Python code.",
                            "For asynchronous data, we need to provide the call back function else it might throw an error. While preparing my code for importing, I was getting an error with code-504 which stated deadline exception. If you face such an error, you can mention timeout exclusively because by default time taken for the task is 60 secs. ",
                            "Check the statistics of your dataset where you can evaluate your data. If you think, you have got something wrong, you can make the necessary corrections and re-train your dataset once again before its finally prepared to be tested.",
                        ]
                    }]
            },
            "/home_check1": {
                "firstTimeVisit": false,
                "tutorials": [
                    {
                        "label": "Tutorial 1",
                        "currentStep": 2,
                        "numberOfSteps": 6,
                        "labels": [
                            "Identify your personal goals and values.",
                            "Pursue your hobbies and interests to make yourself more interesting.",
                            "Challenge the beliefs that you learned from others to find your truth.",
                            "Embrace your flaws because they make you who your are.",
                            "Silence your inner critic.",
                            "Try new things to get more experiences."
                        ],
                        "descriptions": [
                            "Make a list of the things that are really important to you. Next, consider the things you most want to achieve in your lifetime. Review these lists to figure out what you most value. Then, choose 1-3 personal goals that are important to you.",
                            "Think about the things you enjoy doing most, then figure out how you can include them in your life more.",
                            "You’ve probably absorbed a lot of rules about life from the people around you, like your parents, teachers, or religious leaders. Some of the beliefs will feel true for you, but others may not. Think about the beliefs you learned from others, then question whether or not they feel true for you. In some cases, you may want to talk to other people or do some research to learn more about the topic. Finally, adopt beliefs that fit with your personal values.",
                            "No one is perfect, and it’s okay to have flaws! Instead of looking at your flaws as a bad thing, view them as a balance that helps you recognize your best qualities. Then, try to stop criticizing yourself and focus on being your best self.",
                            "It’s likely that your inner critic is worried that people are going to judge you. That’s probably because you felt judged in the past. To quiet this voice, figure out what you’re afraid will happen if you just be yourself. Then, challenge those thoughts by focusing on what could go right and thinking about your strengths.",
                            "Your experiences make you more unique, so be open to trying new things. Attend local events and festivals, try out new hobbies, and sample new foods."
                        ]
                    }, {
                        "label": "Tutorial 2",
                        "currentStep": 3,
                        "numberOfSteps": 5,
                        "labels": [
                            "Tutorial 2, Step 1",
                            "Tutorial 2, Step 2",
                            "Tutorial 2, Step 3",
                            "Tutorial 2, Step 4",
                            "Tutorial 2, Step 5",
                        ],
                        "descriptions": [
                            "Tutorial 2, Step 1 Description",
                            "Tutorial 2, Step 2 Description",
                            "Tutorial 2, Step 3 Description",
                            "Tutorial 2, Step 4 Description",
                            "Tutorial 2, Step 5 Description",
                        ]
                    },
                    {
                        "label": "Tutorial 3",
                        "currentStep": 1,
                        "numberOfSteps": 4,
                        "labels": [
                            "Tutorial 3, Step 1",
                            "Tutorial 3, Step 2",
                            "Tutorial 3, Step 3",
                            "Tutorial 3, Step 4",
                        ],
                        "descriptions": [
                            "Tutorial 3, Step 1 Description",
                            "Tutorial 3, Step 2 Description",
                            "Tutorial 3, Step 3 Description",
                            "Tutorial 3, Step 4 Description",
                        ]
                    },
                    {
                        "label": "Tutorial 4",
                        "currentStep": 0,
                        "numberOfSteps": 3,
                        "labels": [
                            "Tutorial 4, Step 1",
                            "Tutorial 4, Step 2",
                            "Tutorial 4, Step 3",
                        ],
                        "descriptions": [
                            "Tutorial 4, Step 1 Description",
                            "Tutorial 4, Step 2 Description",
                            "Tutorial 4, Step 3 Description",
                        ]
                    }]
            },
            "/home_check2": {
                "firstTimeVisit": false,
                "tutorials": [
                    {
                        "label": "Tutorial 1",
                        "currentStep": 0,
                        "numberOfSteps": 6,
                        "labels": [
                            "Identify your personal goals and values.",
                            "Pursue your hobbies and interests to make yourself more interesting.",
                            "Challenge the beliefs that you learned from others to find your truth.",
                            "Embrace your flaws because they make you who your are.",
                            "Silence your inner critic.",
                            "Try new things to get more experiences."
                        ],
                        "descriptions": [
                            "Make a list of the things that are really important to you. Next, consider the things you most want to achieve in your lifetime. Review these lists to figure out what you most value. Then, choose 1-3 personal goals that are important to you.",
                            "Think about the things you enjoy doing most, then figure out how you can include them in your life more.",
                            "You’ve probably absorbed a lot of rules about life from the people around you, like your parents, teachers, or religious leaders. Some of the beliefs will feel true for you, but others may not. Think about the beliefs you learned from others, then question whether or not they feel true for you. In some cases, you may want to talk to other people or do some research to learn more about the topic. Finally, adopt beliefs that fit with your personal values.",
                            "No one is perfect, and it’s okay to have flaws! Instead of looking at your flaws as a bad thing, view them as a balance that helps you recognize your best qualities. Then, try to stop criticizing yourself and focus on being your best self.",
                            "It’s likely that your inner critic is worried that people are going to judge you. That’s probably because you felt judged in the past. To quiet this voice, figure out what you’re afraid will happen if you just be yourself. Then, challenge those thoughts by focusing on what could go right and thinking about your strengths.",
                            "Your experiences make you more unique, so be open to trying new things. Attend local events and festivals, try out new hobbies, and sample new foods."
                        ]
                    }, {
                        "label": "Tutorial 2",
                        "currentStep": 0,
                        "numberOfSteps": 5,
                        "labels": [
                            "Tutorial 2, Step 1",
                            "Tutorial 2, Step 2",
                            "Tutorial 2, Step 3",
                            "Tutorial 2, Step 4",
                            "Tutorial 2, Step 5",
                        ],
                        "descriptions": [
                            "Tutorial 2, Step 1 Description",
                            "Tutorial 2, Step 2 Description",
                            "Tutorial 2, Step 3 Description",
                            "Tutorial 2, Step 4 Description",
                            "Tutorial 2, Step 5 Description",
                        ]
                    },
                    {
                        "label": "Tutorial 3",
                        "currentStep": 0,
                        "numberOfSteps": 4,
                        "labels": [
                            "Tutorial 3, Step 1",
                            "Tutorial 3, Step 2",
                            "Tutorial 3, Step 3",
                            "Tutorial 3, Step 4",
                        ],
                        "descriptions": [
                            "Tutorial 3, Step 1 Description",
                            "Tutorial 3, Step 2 Description",
                            "Tutorial 3, Step 3 Description",
                            "Tutorial 3, Step 4 Description",
                        ]
                    },
                    {
                        "label": "Tutorial 4",
                        "currentStep": 0,
                        "numberOfSteps": 3,
                        "labels": [
                            "Tutorial 4, Step 1",
                            "Tutorial 4, Step 2",
                            "Tutorial 4, Step 3",
                        ],
                        "descriptions": [
                            "Tutorial 4, Step 1 Description",
                            "Tutorial 4, Step 2 Description",
                            "Tutorial 4, Step 3 Description",
                        ]
                    }]
            }
        },
        "__v": 0
    },
    {
        "_id": "5f3ef6f3c190683b70d0d0c9",
        "username": "Andrei",
        "pages": {
            "/": {
                "firstTimeVisit": true,
                "tutorials": [
                    {
                        "label": "Building a Workflow Template",
                        "currentStep": 1,
                        "numberOfSteps": 6,
                        "labels": [
                            "Create a WorkFlow Template",
                            "Provide a Cluster Configuration and associate it to the workflow template",
                            "Provide a job script, assign a unique step-id and associate it to the workflow template",
                            "Provide more jobs if required assigning unique step-id and associate them to workflow template",
                            "Finally , instantiate the workflow template i.e. execute the workflow template which would create the cluster, run the jobs and finally delete the cluster",
                        ],
                        "descriptions": [
                            "First we would need to create a bucket to store the job script that we need to execute. Let’s start by creating the environment variables and a GCS bucket. This bucket will be used to store the job files.",
                            "Now we will provide the cluster details and associate it to the workflow template. The below is a simple example of creating a cluster. You can read here for managed cluster and here for custom cluster to create a custom cluster by providing more granular parameters. In the below command , image parameter is very important because it sets the version of hadoop and spark. You can see the complete list here. Note that the below command will not actually create a cluster but it will associate the cluster creation step to the workflow template.",
                            "Now the next step is to assign the job script to the workflow template. Let’s first create a very simple pyspark script for our job. Please execute the below command. Copy the below content in the script and save the file. Please replace the bucket name appropriately. Save the file and lets upload it to the bucket that we have created.",
                            "Now we are done with our workflow template creation. We do not need to add delete cluster step. Since we have created it as managed-cluster , it will delete itself after the job execution is complete. Now let’s test by executing this workflow. We need to execute the below command to instantiate the workflow.",
                            "In case you are using any specific library in your pyspark job , the same needs to be included as part of cluster creation. Please see the 2 parameters i.e. metadata & initialization-actions that is added below which installs scipy package on each node when the cluster gets created. Similarly you can install other libraries as required.",
                        ]
                    }, {
                        "label": "Model Training using AI Platform",
                        "currentStep": 2,
                        "numberOfSteps": 5,
                        "labels": [
                            "Build a custom container",
                            "Create a bucket and upload the iris.csv file to it",
                            "Create the Dockerfile",
                            "Start our AI Platform Training Job",
                            "Monitor the job",
                        ],
                        "descriptions": [
                            "Build a custom container as per our requirement and publish this container to the container repository. This container will hold the specific framework that we need to train our model and the actual code of training the model.",
                            "Let’s assume that we have a specific requirement of scikit-learn version 0.20.3 and pandas as 0.24.2. Hence we will build a custom container with these specific version and that container will be passed to AI Platform Job for model training.",
                            "We will use Cloud Build to build the image and push it our project’s Container Registry. As we use the remote cloud service to build the image, we don’t need a local installation of Docker.",
                            "Use this image and start our AI Platform Training Job via below command. The different while using the custom container is that we don’t need to provide parameters package-path, module-name , runtime-version and python-version. All this are available within the custom container that we built above and instead we use the parameter master-image-uri which is pointing to image that we created which has the dependencies installed and the code also available.",
                            "You will observe below message once the job has been submitted.",
                        ],
                    },
                    {
                        "label": "Importing data into a dataset",
                        "currentStep": 3,
                        "numberOfSteps": 4,
                        "labels": [
                            "Creating a dataset",
                            "Importing data into a dataset",
                            "Training models",
                            "Schema review",
                        ],
                        "descriptions": [
                            "Begin the process of creating your dataset. Select Datasets, and then select New dataset. Enter the name of your dataset and specify the Region where the dataset will be created. Click Create dataset. The Import tab is displayed. You can now import your data.",
                            "If needed, select your dataset from list on the Datasets page to open its Import tab. Choose the import source for your data: BigQuery, Cloud Storage, or your local computer. Provide the information required. If you load your CSV files from your local computer, you must provide a Cloud Storage bucket. Your files are loaded to that bucket before they are imported into AutoML Tables. The files remain there after the data import unless you remove them. The bucket must be in the same location as your dataset. Learn more. Click Import to start the import process. When the import process finishes, the Train tab is displayed, and you are ready to train your model.",
                            "Click Train model to begin model training. Training a model can take several hours to complete depending on the size of the dataset and the training budget. You can close your browser window without affecting the training process. After the model is successfully trained, the Models tab shows high-level metrics for the model, such as precision and recall.",
                            "AutoML Tables infers the data type and whether a column is nullable for each column based on the original data type (if it was imported from BigQuery) and the values in the column. You should check each column and make sure it looks correct.",
                        ]
                    },
                    {
                        "label": "Working with AutoML",
                        "currentStep": 3,
                        "numberOfSteps": 3,
                        "labels": [
                            "Extracting frames from videos of objects ",
                            "Preparing a labelled CSV dataset and uploading it to Google Cloud Storage",
                            "Testing random images on the model",
                        ],
                        "descriptions": [
                            "Prepare a bucket to use for your project. But for everything, instead of using the console, I have done in Python. I have used Jupyter notebook to write the Python code.",
                            "For asynchronous data, we need to provide the call back function else it might throw an error. While preparing my code for importing, I was getting an error with code-504 which stated deadline exception. If you face such an error, you can mention timeout exclusively because by default time taken for the task is 60 secs. ",
                            "Check the statistics of your dataset where you can evaluate your data. If you think, you have got something wrong, you can make the necessary corrections and re-train your dataset once again before its finally prepared to be tested.",
                        ]
                    }]
            },
            "/home_check1": {
                "firstTimeVisit": false,
                "tutorials": [
                    {
                        "label": "Tutorial 1",
                        "currentStep": 0,
                        "numberOfSteps": 5,
                        "labels": [
                            "Identify your personal goals and values.",
                            "Pursue your hobbies and interests to make yourself more interesting.",
                            "Challenge the beliefs that you learned from others to find your truth.",
                            "Embrace your flaws because they make you who your are.",
                            "Silence your inner critic.",
                            "Try new things to get more experiences."
                        ],
                        "descriptions": [
                            "Make a list of the things that are really important to you. Next, consider the things you most want to achieve in your lifetime. Review these lists to figure out what you most value. Then, choose 1-3 personal goals that are important to you.",
                            "Think about the things you enjoy doing most, then figure out how you can include them in your life more.",
                            "You’ve probably absorbed a lot of rules about life from the people around you, like your parents, teachers, or religious leaders. Some of the beliefs will feel true for you, but others may not. Think about the beliefs you learned from others, then question whether or not they feel true for you. In some cases, you may want to talk to other people or do some research to learn more about the topic. Finally, adopt beliefs that fit with your personal values.",
                            "No one is perfect, and it’s okay to have flaws! Instead of looking at your flaws as a bad thing, view them as a balance that helps you recognize your best qualities. Then, try to stop criticizing yourself and focus on being your best self.",
                            "It’s likely that your inner critic is worried that people are going to judge you. That’s probably because you felt judged in the past. To quiet this voice, figure out what you’re afraid will happen if you just be yourself. Then, challenge those thoughts by focusing on what could go right and thinking about your strengths.",
                            "Your experiences make you more unique, so be open to trying new things. Attend local events and festivals, try out new hobbies, and sample new foods."
                        ]
                    }, {
                        "label": "Tutorial 2",
                        "currentStep": 0,
                        "numberOfSteps": 5,
                        "labels": [
                            "Tutorial 2, Step 1",
                            "Tutorial 2, Step 2",
                            "Tutorial 2, Step 3",
                            "Tutorial 2, Step 4",
                            "Tutorial 2, Step 5",
                        ],
                        "descriptions": [
                            "Tutorial 2, Step 1 Description",
                            "Tutorial 2, Step 2 Description",
                            "Tutorial 2, Step 3 Description",
                            "Tutorial 2, Step 4 Description",
                            "Tutorial 2, Step 5 Description",
                        ]
                    },
                    {
                        "label": "Tutorial 3",
                        "currentStep": 0,
                        "numberOfSteps": 4,
                        "labels": [
                            "Tutorial 3, Step 1",
                            "Tutorial 3, Step 2",
                            "Tutorial 3, Step 3",
                            "Tutorial 3, Step 4",
                        ],
                        "descriptions": [
                            "Tutorial 3, Step 1 Description",
                            "Tutorial 3, Step 2 Description",
                            "Tutorial 3, Step 3 Description",
                            "Tutorial 3, Step 4 Description",
                        ]
                    },
                    {
                        "label": "Tutorial 4",
                        "currentStep": 0,
                        "numberOfSteps": 3,
                        "labels": [
                            "Tutorial 4, Step 1",
                            "Tutorial 4, Step 2",
                            "Tutorial 4, Step 3",
                        ],
                        "descriptions": [
                            "Tutorial 4, Step 1 Description",
                            "Tutorial 4, Step 2 Description",
                            "Tutorial 4, Step 3 Description",
                        ]
                    }]
            },
            "/home_check2": {
                "firstTimeVisit": false,
                "tutorials": [
                    {
                        "label": "Tutorial 1",
                        "currentStep": 0,
                        "numberOfSteps": 5,
                        "labels": [
                            "Identify your personal goals and values.",
                            "Pursue your hobbies and interests to make yourself more interesting.",
                            "Challenge the beliefs that you learned from others to find your truth.",
                            "Embrace your flaws because they make you who your are.",
                            "Silence your inner critic.",
                            "Try new things to get more experiences."
                        ],
                        "descriptions": [
                            "Make a list of the things that are really important to you. Next, consider the things you most want to achieve in your lifetime. Review these lists to figure out what you most value. Then, choose 1-3 personal goals that are important to you.",
                            "Think about the things you enjoy doing most, then figure out how you can include them in your life more.",
                            "You’ve probably absorbed a lot of rules about life from the people around you, like your parents, teachers, or religious leaders. Some of the beliefs will feel true for you, but others may not. Think about the beliefs you learned from others, then question whether or not they feel true for you. In some cases, you may want to talk to other people or do some research to learn more about the topic. Finally, adopt beliefs that fit with your personal values.",
                            "No one is perfect, and it’s okay to have flaws! Instead of looking at your flaws as a bad thing, view them as a balance that helps you recognize your best qualities. Then, try to stop criticizing yourself and focus on being your best self.",
                            "It’s likely that your inner critic is worried that people are going to judge you. That’s probably because you felt judged in the past. To quiet this voice, figure out what you’re afraid will happen if you just be yourself. Then, challenge those thoughts by focusing on what could go right and thinking about your strengths.",
                            "Your experiences make you more unique, so be open to trying new things. Attend local events and festivals, try out new hobbies, and sample new foods."
                        ]
                    }, {
                        "label": "Tutorial 2",
                        "currentStep": 0,
                        "numberOfSteps": 5,
                        "labels": [
                            "Tutorial 2, Step 1",
                            "Tutorial 2, Step 2",
                            "Tutorial 2, Step 3",
                            "Tutorial 2, Step 4",
                            "Tutorial 2, Step 5",
                        ],
                        "descriptions": [
                            "Tutorial 2, Step 1 Description",
                            "Tutorial 2, Step 2 Description",
                            "Tutorial 2, Step 3 Description",
                            "Tutorial 2, Step 4 Description",
                            "Tutorial 2, Step 5 Description",
                        ]
                    },
                    {
                        "label": "Tutorial 3",
                        "currentStep": 0,
                        "numberOfSteps": 4,
                        "labels": [
                            "Tutorial 3, Step 1",
                            "Tutorial 3, Step 2",
                            "Tutorial 3, Step 3",
                            "Tutorial 3, Step 4",
                        ],
                        "descriptions": [
                            "Tutorial 3, Step 1 Description",
                            "Tutorial 3, Step 2 Description",
                            "Tutorial 3, Step 3 Description",
                            "Tutorial 3, Step 4 Description",
                        ]
                    },
                    {
                        "label": "Tutorial 4",
                        "currentStep": 0,
                        "numberOfSteps": 3,
                        "labels": [
                            "Tutorial 4, Step 1",
                            "Tutorial 4, Step 2",
                            "Tutorial 4, Step 3",
                        ],
                        "descriptions": [
                            "Tutorial 4, Step 1 Description",
                            "Tutorial 4, Step 2 Description",
                            "Tutorial 4, Step 3 Description",
                        ]
                    }]
            }
        },
        "__v": 0
    },
]

const drawerWidth = 460;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    title: {
        flexGrow: 1,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
}));


export default function SidebarWithTutorial(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    // const tutorials = users[0]['pages']['/']['tutorials']

    // let serializedMap = JSON.stringify(props.user);
    // console.log(JSON.parse(JSON.stringify(props.user)))
    // console.log(props.user)

    // const tutorials = props.user == null ? [] : props.user.pages['/'].tutorials
    let index = -1
    if (props.user === 'Henry') index = 0
    else if (props.user === 'Konrad') index = 1
    else if (props.user === 'Andrei') index = 2

    let tutorials = []

    if(index !== -1)
        tutorials = users[index]['pages']['/']['tutorials']
    console.log(tutorials)
    // const tutorials = null

    return (
        <div>
            <ListItem
                button
                key={'Sidebar guide'}
                onClick={open ? handleDrawerClose : handleDrawerOpen}
            >
                <ListItemIcon>
                    <InboxIcon/>
                </ListItemIcon>
                <ListItemText primary={'Sidebar guide with tutorials'}/>
                <HelpInfo
                    text="Sidebar with tutorials which you can guide and see how functionality works"/>
            </ListItem>

            <div className={classes.root}>
                <CssBaseline/>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="right"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                        </IconButton>
                    </div>
                    <List>
                        {tutorials.map(tutorial => (<TutorialStepper tutorial={tutorial}/>))}
                        <Divider/>
                    </List>
                </Drawer>
            </div>
        </div>
    );
}