import type { ReactNode } from "react"; 

import JavaLogo from "../assets/skills/java.svg";
import PythonLogo from "../assets/skills/python.svg";
import KotlinLogo from "../assets/skills/kotlin.svg";
import TypeScriptLogo from "../assets/skills/typescript.svg";
import JavaScriptLogo from "../assets/skills/javascript.svg";

import ReactNativeLogo from "../assets/skills/react-native.svg";
import JetpackComposeLogo from "../assets/skills/jetpack-compose.svg";
import ReactLogo from "../assets/skills/react.svg";
import NodejsLogo from "../assets/skills/nodejs.svg";
import ExpoLogo from "../assets/skills/expo.svg";

import MySQLLogo from "../assets/skills/mysql.svg";
import PostgreSQLLogo from "../assets/skills/postgresql.svg";
import MongoDBLogo from "../assets/skills/mongodb-original.svg";

import GitLogo from "../assets/skills/git.svg";
import PostmanLogo from "../assets/skills/postman.svg";
import LinuxLogo from "../assets/skills/linux.svg";

import TensorFlowLogo from "../assets/skills/tensorflow.svg";
import KerasLogo from "../assets/skills/keras.svg";
import OpenCVLogo from "../assets/skills/opencv.svg";
import PandasLogo from "../assets/skills/pandas.svg";

import LaravelLogo from "../assets/skills/laravel.svg";
import AWSLogo from "../assets/skills/aws.svg";

import { FaGithub } from "react-icons/fa";

import { TbBraces } from "react-icons/tb";
import { TbKey } from "react-icons/tb";
import { TbArrowsExchange } from "react-icons/tb";
import { TbMoodSmile } from "react-icons/tb";
import { TbWindow } from "react-icons/tb";
import { TbPlugConnected } from "react-icons/tb";

import { MdLocationOn } from "react-icons/md";

export type Technology = {
    name: string;
    labels?: {
        en: string;
        es: string;
    };
    icon: ReactNode;
};

const SkillImage = ({
    src,
    alt,
}: {
    src: string;
    alt: string;
}) => (
    <img
        src={src}
        alt={alt}
        className="skill-logo"
    />
);

export const technologies = {
    Java: {
        name: "Java",
        icon: <SkillImage src={JavaLogo} alt="Java" />,
    },

    Python: {
        name: "Python",
        icon: <SkillImage src={PythonLogo} alt="Python" />,
    },

    Kotlin: {
        name: "Kotlin",
        icon: <SkillImage src={KotlinLogo} alt="Kotlin" />,
    },

    TypeScript: {
        name: "TypeScript",
        icon: <SkillImage src={TypeScriptLogo} alt="TypeScript" />,
    },

    JavaScript: {
        name: "JavaScript",
        icon: <SkillImage src={JavaScriptLogo} alt="JavaScript" />,
    },

    "React Native": {
        name: "React Native",
        icon: <SkillImage src={ReactNativeLogo} alt="React Native" />,
    },

    "Jetpack Compose": {
        name: "Jetpack Compose",
        icon: <SkillImage src={JetpackComposeLogo} alt="Jetpack Compose" />,
    },

    React: {
        name: "React",
        icon: <SkillImage src={ReactLogo} alt="React" />,
    },

    "Node.js / Express": {
        name: "Node.js / Express",
        icon: <SkillImage src={NodejsLogo} alt="NodeJs" />,
    },

    Expo: {
        name: "Expo",
        icon: <SkillImage src={ExpoLogo} alt="Expo" />,
    },

    MySQL: {
        name: "MySQL",
        icon: <SkillImage src={MySQLLogo} alt="MySQL" />,
    },

    PostgreSQL: {
        name: "PostgreSQL",
        icon: <SkillImage src={PostgreSQLLogo} alt="PostgreSQL" />,
    },

    MongoDB: {
        name: "MongoDB",
        icon: <SkillImage src={MongoDBLogo} alt="MongoDB" />,
    },

    Git: {
        name: "Git",
        icon: <SkillImage src={GitLogo} alt="Git" />,
    },

    GitHub: {
        name: "GitHub",
        icon: <FaGithub size={22} color="var(--icon-github)" />,
    },

    "REST API": {
        name: "REST API",
        icon: <TbBraces size={22} color="var(--icon-api)" />,
    },

    Postman: {
        name: "Postman",
        icon: <SkillImage src={PostmanLogo} alt="Postman" />,
    },

    TensorFlow: {
        name: "TensorFlow",
        icon: <SkillImage src={TensorFlowLogo} alt="TensorFlow" />,
    },

    Keras: {
        name: "Keras",
        icon: <SkillImage src={KerasLogo} alt="Keras" />
    },

    OpenCV: {
        name: "OpenCV",
        icon: <SkillImage src={OpenCVLogo} alt="OpenCV" />,
    },

    DeepFace: {
        name: "DeepFace",
        icon: <TbMoodSmile size={22} color="var(--icon-deepface)" />
    },

    Pandas: {
        name: "Pandas",
        icon: <SkillImage src={PandasLogo} alt="Pandas" />
    },

    Tkinter: {
        name: "Tkinter",
        icon: <TbWindow size={22} color="var(--icon-desktop)" />,
    },

    Linux: {
        name: "Linux",
        icon: <SkillImage src={LinuxLogo} alt="Linux" />,
    },

    JWT: {
        name: "JWT",
        icon: <TbKey size={22} color="var(--icon-jwt)" />,
    },

    Retrofit: {
        name: "Retrofit",
        icon: <TbArrowsExchange size={22} color="var(--icon-retrofit)" />,
    },

    Laravel: {
        name: "Laravel",
        icon: <SkillImage src={LaravelLogo} alt="Laravel" />,
    },

    "AWS S3": {
        name: "AWS S3",
        icon: <SkillImage src={AWSLogo} alt="AWS S3" />,
    },

    Geolocation: {
        name: "Geolocation",
        labels: {
            en: "Geolocation",
            es: "Geolocalización",
        },
        icon: <MdLocationOn size={22} color="var(--icon-location)" />,
    },

    Serial: {
        name: "Serial",
        labels: {
            en: "Serial",
            es: "Serial",
        },
        icon: <TbPlugConnected size={22} color="var(--icon-serial)" />,
    }

} as const;

export type TechnologyKey = keyof typeof technologies;
