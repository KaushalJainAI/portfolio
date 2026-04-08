/**
 * Google Drive Asset Links
 * 
 * IMPORTANT: To use Google Drive images in <img> tags, they must be converted 
 * to a direct view link format.
 * 
 * Standard Share Link: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 * Direct View Link:    https://drive.google.com/uc?export=view&id=FILE_ID
 */

export const getDriveDirectLink = (fileId: string): string => {
  if (!fileId) return '';
  // If it's already a full URL, return it
  if (fileId.startsWith('http')) return fileId;
  return `https://drive.google.com/uc?export=view&id=${fileId}`;
};

export const assetLinks = {
  // The main folder link for reference
  sharedFolder: "https://drive.google.com/drive/folders/1HAG09Y7vWhGlFzf5fnKYG_dJSgfSBZY0?usp=sharing",
  
  // Project Visuals
  projects: {
    nguSpices: getDriveDirectLink("1DVlGiaEeXo8HuafyRVNQCPw-VN-8tcKf"),
    multiAgentSystem: getDriveDirectLink("11sOjp--w4TAgLdcQkRXjO4EXDK9BgpcI"),
    nasaBatteryRul: getDriveDirectLink("13-WwVHpJHCkFDOXFqVSRVrR0YOGRpTlZ"),
    firmwareSecurity: getDriveDirectLink("1NN69azRWVABoa6IhPjoJERqPcG6wJ8jj"),
    aiResearchFlow: getDriveDirectLink("11sOjp--w4TAgLdcQkRXjO4EXDK9BgpcI"), // Reusing similar visual
  },

  // General Assets
  profile: {
    heroWorkspace: getDriveDirectLink("1j38mEB1CtbJcTg-njIK53NTapFco5Z8X"),
    avatar: getDriveDirectLink("1C8V17YuGUtbNli05gbC_DKFgrFejRE52"),
    teamCollab: getDriveDirectLink("1HmTRlOAMj9P9afH-cT2v57pKO7Px6cIf"),
  },

  // Skills & Tech
  skills: {
    heroCollage: getDriveDirectLink("1SjWhzC0VqbbkiEwbqVSaVTzGxg3Xk0zs"),
    techStack: getDriveDirectLink("1z6QdXG1EBLrmNcZewChXZmhlz5UryDUH"),
  },

  // Personal & Hobbies
  personal: {
    piano: getDriveDirectLink("1gWXUhcL4F8WcmcyuuVgOGXFlYTidQR7F"),
    chess: getDriveDirectLink("1j38mEB1CtbJcTg-njIK53NTapFco5Z8X"), // Reusing workspace/hobby visual
    pecCampus: getDriveDirectLink("1JtVfq4b68U9IgHbNdI44WFKvWiRkXYJf"),
    leetcode: getDriveDirectLink("1sCS-XT79vRflFPpfwJk7WWr7WKoBTqwv"),
    battleOfBands: getDriveDirectLink("11mGGR4BUa4uR-l5p_GWWyKS4E0PRAxhz"),
  }
};
