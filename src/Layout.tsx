// 'use client'
// import React, { useState } from 'react';
// import { LeftPanel } from '@/components/left_panel/LeftPanel';
// import { TopPanel } from '@/components/top_panel/TopPanel';
// import { Content } from '@/components/content/Content';

// export const Layout = () => {
//     const [selected, setSelected] = useState<'авторизація' | 'реєстрація'>('реєстрація');
//     return (
//         <div className='grid grid-cols-2 h-screen' style={{ gridTemplateColumns: '250px 1fr', gridTemplateRows: '60px 1fr' }}>
//             <LeftPanel selected={selected} setSelected={setSelected} />
//             <TopPanel />
//             <Content />
//         </div>
//     )
// }