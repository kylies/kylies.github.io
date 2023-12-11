import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      repo="kylies/kymira-comments"
      repoId="R_kgDOJUSgIQ"
      category="General"
      categoryId="DIC_kwDOJUSgIc4CVog-"  // E.g. id of "General"
      mapping="https://github.com/kylies/kymira-comments"                        // Important! To map comments to URL
      term="Welcome to @giscus/react component!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="en"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
}
