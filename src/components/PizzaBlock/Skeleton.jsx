import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader className="pizza-block"
        speed={2}
        width={280}
        height={500}
        viewBox="0 0 280 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="10" y="1" rx="0" ry="0" width="260" height="260" />
        <rect x="0" y="270" rx="10" ry="10" width="280" height="30" />
        <rect x="0" y="318" rx="10" ry="10" width="280" height="88" />
        <rect x="0" y="426" rx="10" ry="10" width="95" height="30" />
        <rect x="130" y="418" rx="25" ry="25" width="150" height="45" />
    </ContentLoader>
)

export default Skeleton