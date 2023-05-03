import React from "react"
import ContentLoader from "react-content-loader"

export const PizzaBlockSkeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="120" cy="120" r="120"/>
    <rect x="0" y="259" rx="10" ry="10" width="280" height="27"/>
    <rect x="0" y="297" rx="10" ry="10" width="280" height="76"/>
    <rect x="0" y="390" rx="10" ry="10" width="90" height="25"/>
    <rect x="127" y="390" rx="23" ry="23" width="152" height="45"/>
  </ContentLoader>
);