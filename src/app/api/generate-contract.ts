// import type { NextApiRequest, NextApiResponse } from "next";

// const darkBlue = "#14213D";
// const gold = "#B8860B";
// const lightGold = "#DAA520";

// type Data = {
//   message: string;
//   contract?: string;
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   if (req.method === "POST") {
//     const { clientName, clientAddress, executionDate, price, locale } =
//       req.body;

//     const generateContract = (
//       clientName: string,
//       clientAddress: string,
//       executionDate: string,
//       price: string,
//       locale: string
//     ): string => {
//       const formattedPrice = parseFloat(price).toFixed(2);
//       if (locale === "fr") {
//         return `
//                     <div style="font-family: Arial, sans-serif; color: ${darkBlue}; padding: 20px;">
//                         <h2 style="color: ${gold}; text-align: center;">ENTENTE</h2>
//                         <p><strong>ENTRE:</strong> Simac Électrotechnique inc., ayant une place d'affaires au ${clientAddress} (ci-après désigné le « Client »)</p>
//                         <p><strong>ET:</strong> JAN-Pro (ci-après désigné le « Franchisé »)</p>
//                         <p><strong>ET:</strong> Jan-Pro Longueuil/Montérégie (9489-7238 Québec inc.)</p>
//                         <h3 style="color: ${lightGold}; margin-top: 20px;">OBJET DE L'ENTENTE</h3>
//                         <p>Cette entente définit les termes et les conditions du travail à exécuter par le Franchisé pour le Client, Simac Électrotechnique inc.</p>
//                         <div style="margin-top: 10px;">
//                             <p><strong>TYPE DE TRAVAIL:</strong> Nettoyage des tapis</p>
//                             <p><strong>EMPLACEMENT:</strong> ${clientAddress}</p>
//                             <p><strong>DATE D'EXÉCUTION:</strong> ${executionDate}</p>
//                             <p><strong>PRIX:</strong> ${formattedPrice} $ Facturé à la date d'exécution et payable sur réception. Le prix n'inclut pas les taxes applicables.</p>
//                         </div>
//                         <div style="margin-top: 20px;">
//                             <h3 style="color: ${lightGold};">DESCRIPTION:</h3>
//                             <p>Le Client doit s'assurer de libérer l'espace pour permettre un travail de qualité.</p>
//                             <p>Nettoyage de tapis selon la méthode de l'extraction à l'eau chaude.</p>
//                             <p>L'enlèvement de toutes les taches du tapis n'est pas garanti.</p>
//                         </div>
//                         <div style="margin-top: 20px;">
//                             <h3 style="color: ${lightGold};">CONDITIONS SPÉCIALES</h3>
//                             <p><strong>ASSURANCE RESPONSABILITÉ:</strong> Jan-Pro possède une assurance responsabilité civile de 5 000 000 $ avec une franchise de 50 000 $.</p>
//                         </div>
//                         <div style="margin-top: 20px;">
//                             <h3 style="color: ${lightGold};">RELATIONS CONTRACTUELLES:</h3>
//                             <p>Le Client reconnaît que la présente entente intervient entre lui-même et le franchisé, conjointement avec Jan-Pro Longueuil/Montérégie (9489-7238 Québec inc.), laquelle a été mandatée spécialement par les franchisés en vertu de leur contrat de franchise pour que celle-ci les représente et facture leurs travaux auprès de leurs Clients.</p>
//                         </div>
//                     </div>
//                 `;
//       } else {
//         return `
//                     <div style="font-family: Arial, sans-serif; color: ${darkBlue}; padding: 20px;">
//                         <h2 style="color: ${gold}; text-align: center;">AGREEMENT</h2>
//                         <p><strong>BETWEEN:</strong> Simac Électrotechnique inc., located at ${clientAddress} (hereinafter referred to as "Client")</p>
//                         <p><strong>AND:</strong> JAN-Pro (hereinafter referred to as "Franchisee")</p>
//                         <p><strong>AND:</strong> Jan-Pro Longueuil/Montérégie (9489-7238 Québec inc.)</p>
//                         <h3 style="color: ${lightGold}; margin-top: 20px;">OBJECT OF THE AGREEMENT</h3>
//                         <p>This agreement defines the terms and conditions of the work to be performed by the Franchisee for the Client, Simac Électrotechnique inc.</p>
//                         <div style="margin-top: 10px;">
//                             <p><strong>TYPE OF WORK:</strong> Carpet Cleaning</p>
//                             <p><strong>LOCATION:</strong> ${clientAddress}</p>
//                             <p><strong>EXECUTION DATE:</strong> ${executionDate}</p>
//                             <p><strong>PRICE:</strong> $${formattedPrice} Billed on the execution date and payable upon receipt. The price does not include applicable taxes.</p>
//                         </div>
//                         <div style="margin-top: 20px;">
//                             <h3 style="color: ${lightGold};">DESCRIPTION:</h3>
//                             <p>The Client must ensure the area is free to allow for quality work.</p>
//                             <p>Carpet cleaning using hot water extraction method.</p>
//                             <p>The removal of all stains from the carpet is not guaranteed.</p>
//                         </div>
//                         <div style="margin-top: 20px;">
//                             <h3 style="color: ${lightGold};">SPECIAL CONDITIONS</h3>
//                             <p><strong>LIABILITY INSURANCE:</strong> Jan-Pro has civil liability insurance of $5,000,000 with a deductible of $50,000.</p>
//                         </div>
//                         <div style="margin-top: 20px;">
//                             <h3 style="color: ${lightGold};">CONTRACTUAL RELATIONS:</h3>
//                             <p>The Client acknowledges that this agreement is between himself and the franchisee, jointly with Jan-Pro Longueuil/Montérégie (9489-7238 Québec inc.), which has been specifically mandated by the franchisees under their franchise agreement to represent them and invoice their clients for their work.</p>
//                         </div>
//                     </div>
//                 `;
//       }
//     };

//     const contract = generateContract(
//       clientName,
//       clientAddress,
//       executionDate,
//       price,
//       locale
//     );

//     res
//       .status(200)
//       .json({ message: "Contract generated successfully!", contract });
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }
