import type { ISportCard } from "../../types";

type Props = {
  spaceInfo: ISportCard;
};

const Card = ({ spaceInfo }: Props) => {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <figure className="overflow-hidden">
        <img
          src={spaceInfo.image}
          alt={spaceInfo.name}
          className="h-44 w-full object-cover transition-transform duration-500"
          loading="lazy"
          decoding="async"
        />
      </figure>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">{spaceInfo.icon}</span>

            <h3 className="font-heading text-lg font-semibold">
              {spaceInfo.name}
            </h3>
          </div>

          <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">
            {spaceInfo.venues} spaces
          </span>
        </div>

        <p className="flex-1 text-sm leading-6 text-slate-500">
          {spaceInfo.description}
        </p>
      </div>
    </article>
  );
};

export default Card;
