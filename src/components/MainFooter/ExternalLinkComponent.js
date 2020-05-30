import React from "react";

export default function ExternalLinkComponent({ link, title, Icon = null }) {
  return (
    <div class="main-footer-item">
      <span class="main-footer-item-icon"></span>
      {Icon && <Icon />}
      <a href={link} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </div>
  );
}
