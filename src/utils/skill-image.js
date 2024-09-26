// src/utils/skill-image.js

import html from '/public/svg/skills/html.svg';
import css from '/public/svg/skills/css.svg';
import javascript from '/public/svg/skills/javascript.svg';
import react from '/public/svg/skills/react.svg';
import nextJS from '/public/svg/skills/nextJS.svg';
import tailwind from '/public/svg/skills/tailwind.svg';
import docker from '/public/svg/skills/docker.svg';
import git from '/public/svg/skills/git.svg';
import aws from '/public/svg/skills/aws.svg';
import go from '/public/svg/skills/go.svg';
import firebase from '/public/svg/skills/firebase.svg';
import mysql from '/public/svg/skills/mysql.svg';
import mongodb from '/public/svg/skills/mongoDB.svg';
import postgresql from '/public/svg/skills/postgresql.svg';
import figma from '/public/svg/skills/figma.svg';
import bootstrap from '/public/svg/skills/bootstrap.svg';
import materialUI from '/public/svg/skills/materialui.svg';
import nginx from '/public/svg/skills/nginx.svg';
import strapi from '/public/svg/skills/strapi.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html': return html;
    case 'css': return css;
    case 'javascript': return javascript;
    case 'react': return react;
    case 'next js': return nextJS;
    case 'tailwind': return tailwind;
    case 'docker': return docker;
    case 'git': return git;
    case 'aws': return aws;
    case 'go': return go;
    case 'firebase': return firebase;
    case 'mysql': return mysql;
    case 'mongodb': return mongodb;
    case 'postgresql': return postgresql;
    case 'figma': return figma;
    case 'bootstrap': return bootstrap;
    case 'materialui': return materialUI;
    case 'nginx': return nginx;
    case 'strapi': return strapi;
    default: return null;
  }
};
