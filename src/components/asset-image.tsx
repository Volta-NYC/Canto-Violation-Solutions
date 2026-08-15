import Image from "next/image";
import { getAsset } from "@/content/media";

/**
 * Renders a media asset.
 *
 * Every image on this site is currently a locally-generated SVG placeholder,
 * because info.md turned up no usable photography. Each one is tagged in the
 * DOM so the full shot list can be recovered from a live page:
 *
 *     [...document.querySelectorAll('[data-asset]')]
 *       .map(el => ({ id: el.dataset.asset, brief: el.dataset.assetBrief }))
 *
 * The same list lives in ASSETS-NEEDED.md and src/content/media.ts.
 * Swapping in a real photo means changing only the `src` in media.ts — the
 * alt text is already written for the real image.
 */
export function AssetImage({
  id,
  className = "",
  imageClassName = "",
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: {
  id: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const asset = getAsset(id);

  return (
    <figure
      className={`relative overflow-hidden bg-mist ${className}`}
      data-asset={asset.id}
      data-asset-priority={asset.priority}
      data-asset-brief={asset.brief}
    >
      {/* PLACEHOLDER IMAGE — see data-asset-brief above for the shot to request */}
      <Image
        src={asset.src}
        alt={asset.alt}
        width={asset.width}
        height={asset.height}
        priority={priority}
        sizes={sizes}
        className={`h-full w-full object-cover ${imageClassName}`}
      />
      <figcaption className="sr-only">
        Placeholder image. Awaiting: {asset.brief}
      </figcaption>
    </figure>
  );
}
