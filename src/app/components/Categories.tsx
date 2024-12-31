"use client"

import React, { useState } from 'react'

const Categories: React.FC = () => {

  const categories = [

    {name: "POPULAR", id: "POPULAR"},
    {name: "ACTION", id: "ACTION"},
    {name: "ADVENTURE", id: "ADVENTURE"},
    {name: "COMEDY", id: "COMEDY"},
    {name: "FANTASY", id: "FANTASY"},
    {name: "SCIENTIFIC FICTION", id: "SCIENTIFIC FICTION"},
    {name: "CRIME", id: "CRIME"},
    {name: "HISTORY", id: "HISTORY"},
    {name: "ROMANTIC", id: "ROMANTIC"},
  ];

return (
<section className="flex justify-center space-x-6 py-6 bg-gradient-to-b from-black to-gray-900">
  {categories.map((category) => (
    <a key={category.id} href= {`#${category.id}`} className="text-purple-500 hover:text-purple-300">  
    {category.name}
    </a> ))
  }
</section>

);
};

export default Categories;