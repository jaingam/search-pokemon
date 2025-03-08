import SearchResult from "./components/SearchResult";
import SearchBar from "./components/SearchBar";
import { Suspense } from "react";

// type Pokemon = {
//   "number": "string",
//   "name": "string",
//   "weight": {
//     "minimum": "string",
//     "maximum": "string"
//   },
//   "height": {
//     "minimum": "string",
//     "maximum": "string"
//   },
//   "classification": "string",
//   "types": [
//     "string"
//   ],
//   "resistant": [
//     "string"
//   ],
//   "attacks": {
//     "fast": [
//       {
//         "name": "string",
//         "type": "string",
//         "damage": "number"
//       }
//     ],
//     "special": [
//       {
//         "name": "string",
//         "type": "string",
//         "damage": "number"
//       }
//     ]
//   },
//   "weaknesses": [
//     "string"
//   ],
//   "fleeRate": "number",
//   "maxCP": "number",
//   "evolutions": [
//     {
//       "number": "string",
//       "name": "string",
//       "weight": {
//         "minimum": "string",
//         "maximum": "string"
//       },
//       "height": {
//         "minimum": "string",
//         "maximum": "string"
//       },
//       "classification": "string",
//       "types": [
//         "string"
//       ],
//       "resistant": [
//         "string"
//       ],
//       "attacks": {
//         "fast": [
//           {
//             "name": "string",
//             "type": "string",
//             "damage": "number"
//           }
//         ],
//         "special": [
//           {
//             "name": "string",
//             "type": "string",
//             "damage": "number"
//           }
//         ]
//       },
//       "weaknesses": [
//         "string"
//       ],
//       "fleeRate": "number",
//       "maxCP": "number",
//       "evolutions": [
//         {
//           "number": "string",
//           "name": "string",
//           "weight": {
//             "minimum": "string",
//             "maximum": "string"
//           },
//           "height": {
//             "minimum": "string",
//             "maximum": "string"
//           },
//           "classification": "string",
//           "types": [
//             "string"
//           ],
//           "resistant": [
//             "string"
//           ],
//           "attacks": {
//             "fast": [
//               {
//                 "name": "string",
//                 "type": "string",
//                 "damage": "number"
//               }
//             ],
//             "special": [
//               null
//             ]
//           }
//         }
//       ]
//     }
//   ]
// };


export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; }>
}) {

  const searchParam = await searchParams;
  return (
    <main className="min-h-screen bg-palette-cream-2 flex flex-col gap-8 items-center py-40">

      <SearchBar />
      <Suspense key={searchParam.name} fallback={
        <div className="w-80 sm:w-[560px] md:w-[662px] lg:w-[800px] h-[400px] shadow-custom border-2 rounded-3xl overflow-clip bg-palette-cream-1 flex flex-col self-center">
          <div className=" h-16 w-full rounded-t-3xl px-6 content-center">
          </div>
          <div className="fill-foreground bg-foreground h-0.5 w-full" />
          <div className="h-full w-full rounded-b-3xl flex flex-row items-center justify-center text-4xl self-center">
            Loading...
          </div>
        </div>
      }>
        {Object.getOwnPropertyNames(searchParam).length !== 0 && <SearchResult searchParam={searchParam} />}

      </Suspense>
    </main>
  );
}
