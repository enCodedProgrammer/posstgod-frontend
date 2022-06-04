// import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import { padding } from 'polished';
// import {
//   Container,
//   MenuPage,
//   MenuTitle,
//   MenuBox,
//   MenuList,
//   MenuLinks,
//   MainApiBody,
//   MainApiBody01,
//   MainApiBody02,
//   MainApiBox01,
//   MainApiBox02,
//   Bishoptalk,
//   BishopBox,
//   BoddyPage,
// } from './styles';
// import Hero from '~/assets/Hero Image-1.svg';
// import Clock1 from '~/assets/Icon feather-clock-1.svg';
// import FileText from '~/assets/file-text.svg';
// import FileIcon from '~/assets/file.svg';
// import UserIcon from '~/assets/Icon feather-user.svg';
// import BackIco from '~/assets/Icon feather-arrow-down.svg';
// import BishopIco from '~/assets/bishop.png';

// // Each logical "route" has two components, one for
// // the sidebar and one for the main area. We want to
// // render both of them in different places when the
// // path matches the current URL.

// // We are going to use this route config in 2
// // spots: once for the sidebar and once in the main
// // content section. All routes are in the same
// // order they would appear in a <Switch>.
// const routes = [
//   {
//     path: '/',
//     exact: true,
//     sidebar: () => <div>Help Support</div>,
//     main: () => <MainAccount />,
//   },
//   {
//     path: '/schudle',
//     sidebar: () => <div>Help Support</div>,
//     main: () => <MainSchudle />,
//   },
//   {
//     path: '/billing',
//     sidebar: () => <div>Help Support</div>,
//     main: () => <MainBilling />,
//   },
//   {
//     path: '/subs',
//     sidebar: () => <div>Help Support</div>,
//     main: () => <MainSubs />,
//   },
// ];

// export default function Main() {
//   return (
//     <Router>
//       <BoddyPage>
//         <MenuPage>
//           <MenuTitle>POSTGOD</MenuTitle>
//           <MenuBox>
//             <MenuList>
//               <MenuLinks>
//                 <Link to="#">
//                   <h3>
//                     <img src={BackIco} alt="" /> Back
//                   </h3>
//                 </Link>
//               </MenuLinks>
//               <MenuLinks>
//                 <Link to="/">
//                   <h3>
//                     <img src={UserIcon} alt="" /> My Account
//                   </h3>
//                 </Link>
//               </MenuLinks>
//               <MenuLinks>
//                 <Link to="/schudle">
//                   <h3>
//                     <img src={Clock1} alt="" /> Schudle Settings
//                   </h3>
//                 </Link>
//               </MenuLinks>
//               <MenuLinks>
//                 <Link to="/billing">
//                   <h3>
//                     <img src={FileText} alt="" /> Billing
//                   </h3>
//                 </Link>
//               </MenuLinks>
//               <MenuLinks>
//                 <Link to="/subs">
//                   <h3>
//                     <img src={FileIcon} alt="" /> Subscription
//                   </h3>
//                 </Link>
//               </MenuLinks>
//             </MenuList>
//           </MenuBox>
//           <img src={Hero} alt="" />

//           <Switch>
//             {routes.map((route, index) => (
//               // You can render a <Route> in as many places
//               // as you want in your app. It will render along
//               // with any other <Route>s that also match the URL.
//               // So, a sidebar or breadcrumbs or anything else
//               // that requires you to render multiple things
//               // in multiple places at the same URL is nothing
//               // more than multiple <Route>s.
//               <Route
//                 key={index}
//                 path={route.path}
//                 exact={route.exact}
//                 children={<route.sidebar />}
//               />
//             ))}
//           </Switch>
//         </MenuPage>

//         <Container style={{ flex: 1, padding: '0px' }}>
//           <Switch>
//             {routes.map((route, index) => (
//               // Render more <Route>s with the same paths as
//               // above, but different components this time.
//               <Route
//                 key={index}
//                 path={route.path}
//                 exact={route.exact}
//                 children={<route.main />}
//               />
//             ))}
//           </Switch>
//         </Container>
//       </BoddyPage>
//     </Router>
//   );
// }

// function MainAccount() {
//   return (
//     <MainApiBody>
//       <MainApiBody01>
//         <MainApiBox01>
//           <BishopBox>
//             <img src={BishopIco} alt="" />
//             <Bishoptalk />
//           </BishopBox>
//         </MainApiBox01>
//         <MainApiBox02 />
//       </MainApiBody01>

//       <MainApiBody02 />
//     </MainApiBody>
//   );
// }

// function MainSchudle() {
//   return (
//     <MainApiBody>
//       <MainApiBody01>
//         <MainApiBox01>
//           <BishopBox>
//             <img src={BishopIco} alt="" />
//             <Bishoptalk />
//           </BishopBox>
//         </MainApiBox01>
//         <MainApiBox02 />
//       </MainApiBody01>

//       <MainApiBody02 />
//     </MainApiBody>
//   );
// }

// function MainBilling() {
//   return (
//     <MainApiBody>
//       <MainApiBody01>
//         <MainApiBox01>
//           <BishopBox>
//             <img src={BishopIco} alt="" />
//             <Bishoptalk />
//           </BishopBox>
//         </MainApiBox01>
//         <MainApiBox02 />
//       </MainApiBody01>

//       <MainApiBody02 />
//     </MainApiBody>
//   );
// }

// function MainSubs() {
//   return (
//     <MainApiBody>
//       <MainApiBody01>
//         <MainApiBox01>
//           <BishopBox>
//             <img src={BishopIco} alt="" />
//             <Bishoptalk />
//           </BishopBox>
//         </MainApiBox01>
//         <MainApiBox02 />
//       </MainApiBody01>

//       <MainApiBody02 />
//     </MainApiBody>
//   );
// }
