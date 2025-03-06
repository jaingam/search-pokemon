import Result from "./components/Result";
import SearchBar from "./components/SearchBar";

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
  searchParams: Promise<{name?: string;}>
}) {

  const searchParam = await searchParams;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       
        <SearchBar/>
        <Result searchParam={searchParam}/>
      </main>
    </div>
  );
}
