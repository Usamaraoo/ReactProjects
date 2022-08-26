import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'Products',
    links: [
      { label: 'Payment', icon: <FaCreditCard />, url: '/products' },
      { label: 'Terminal', icon: <FaCreditCard />, url: '/products' },
      { label: 'Connect', icon: <FaCreditCard />, url: '/products' },
    ],
  },
  {
    page: 'Developers',
    links: [
      { label: 'Plugins', icon: <FaBook />, url: '/products' },
      { label: 'Libraries', icon: <FaBook />, url: '/products' },
      { label: 'Help', icon: <FaBook />, url: '/products' },
      { label: 'Billing', icon: <FaBook />, url: '/products' },
    ],
  },
  {
    page: 'Company',
    links: [
      { label: 'About', icon: <FaBriefcase />, url: '/products' },
      { label: 'Customers', icon: <FaBriefcase />, url: '/products' },
    ],
  },
];

export default sublinks;