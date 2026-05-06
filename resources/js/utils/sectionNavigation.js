export const SECTION_ROUTES = {
  top: "/",
  services: "/services",
  projects: "/projects",
  method: "/method",
  pricing: "/pricing",
  contact: "/contact",
};

const HEADER_OFFSET = 120;

export function getSectionPath(sectionId) {
  return SECTION_ROUTES[sectionId] ?? "/";
}

export function getSectionIdFromPath(pathname) {
  const normalizedPath = pathname === "" ? "/" : pathname;

  return (
    Object.entries(SECTION_ROUTES).find(([, path]) => path === normalizedPath)?.[0] ??
    null
  );
}

export function scrollToSection(sectionId) {
  if (sectionId === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const element = document.getElementById(sectionId);
  if (!element) {
    return;
  }

  const top = element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
}
