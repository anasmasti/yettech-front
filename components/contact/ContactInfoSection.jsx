import React from 'react'
import ContactInfo from './ContactInfo'
import ContactLinks from './ContactLinks'

export default function ContactInfoSection() {
  return (
    <div className="flex flex-row">
        <ContactLinks />
        <ContactInfo />
    </div>
  )
}
