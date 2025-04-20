import Image from "next/image";
import workSetup from "../../public/work-setup-ghibli.png";

export default function page() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Image
        sizes="100vw"
        alt="work-setup"
        src={workSetup}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <Fill />
      {/* <Background/> */}
    </div>
  );
}

function Fill() {
  return (
    <div
      style={{
        display: "grid",
        gridGap: "8px",
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, auto))",
      }}
    >
      <div style={{ position: "relative", height: "400px" }}>
        <Image
          alt="Mountains"
          src={workSetup}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            objectFit: "cover", // cover, contain, none
          }}
        />
      </div>
      <div style={{ position: "relative", height: "400px" }}>
        <Image
          alt="Mountains"
          src={workSetup}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            objectFit: "cover", // cover, contain, none
          }}
        />
      </div>
      <div style={{ position: "relative", height: "400px" }}>
        <Image
          alt="work-setup"
          src={workSetup}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            objectFit: "cover", // cover, contain, none
          }}
        />
      </div>
      <div style={{ position: "relative", height: "400px" }}>
        <Image
          alt="Mountains"
          src={workSetup}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            objectFit: "cover", // cover, contain, none
          }}
        />
      </div>
      {/* And more images in the grid... */}
    </div>
  );
}
export function Background() {
  return (
    <Image
      alt="work-setup"
      src={workSetup}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: "cover",
        border: "2px solid red",
      }}
    />
  );
}
