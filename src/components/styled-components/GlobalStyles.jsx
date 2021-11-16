import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.primaryText};
    transition: all 0.50s linear;
  }

  .--primary-background {
    background: ${({ theme }) => theme.primaryColor};
  }

  .--secondary-background {
    background: ${({ theme }) => theme.secondaryColor};
  }

  .--third-background {
    background: ${({ theme }) => theme.thirdColor};
  }

  .--accent-background1 {
    background: ${({ theme }) => theme.accentColor1};

  }

  .--primary-text {
    color: ${({ theme }) => theme.primaryText};
  }

  .--secondary-text {
    color: ${({ theme }) => theme.secondaryText};
  }

  .section-header {
    color: ${({ theme }) => theme.sectionHeaderText};

  }
  
  // ABOUT SECTION STYLES
  .polaroid span {
    background: ${({ theme }) => theme.cardBackground};
  }

  .--card-background {
    background: ${({ theme }) => theme.cardBackground};
  }
  // END ABOUT SECTION STYLES
  
  // PORTFOLIO/PROJECT SECTION STYLES
  .foto div {
    background: ${({ theme }) => theme.cardBackground};
  }

  .slider-tab, .experience-badge {
    background: ${({ theme }) => theme.sliderTabBackground};
  }

  .modal-content {
    background: ${({ theme }) => theme.modalBackground};
  }

  .slider-image {
    border: ${({ theme }) => theme.sliderImageBorder};
  }
  //END PORTFOLIO/PROJECT SECTION STYLES

  // SKILLS SECTION STYLES
  .skills-tile {
    background: ${({ theme }) => theme.skillsTileBackground};
    border-color: ${({ theme }) => theme.skillsTileBorder};
    color: ${({ theme }) => theme.skillsTileText};
  }
  // END SKILLS SECTION STYLES

  .hover-color{
    &:hover {
      box-shadow: 0px 0px 0.4375rem 0.125rem ${({ theme }) => theme.hover};
    }
  }
}
  `;
