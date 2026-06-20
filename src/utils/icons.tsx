import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaRegFileAlt,
    FaGlobe,
    FaExternalLinkAlt,
    FaFileAlt,
} from "react-icons/fa";

import {
    MdDownload,
} from "react-icons/md";

export const Icons = {
    github: FaGithub,
    linkedin: FaLinkedin,
    email: FaEnvelope,
    resume: FaRegFileAlt,

    apk: MdDownload,

    website: FaGlobe,
    demo: FaExternalLinkAlt,
    docs: FaFileAlt,
} as const;