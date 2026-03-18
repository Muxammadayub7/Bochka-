import React, { useState } from 'react'
import CatalogArrow from '../../../assets/images/catalog/catalog__arrow.svg'

function CatalogCardsActive() {
	const [activeTab, setActiveTab] = useState(0)

	const toggle = index => {
		setActiveTab(activeTab === index ? null : index)
	}

	let indexCounter = 0

	const data = [
		{
			title: 'Ishlatilish maqsadi',
			items: [
				'Bochka mebellari',
				'Mini-barrel',
				'Vannalar',
				'Sauna bochkalar',
				'Bochka mebellari',
				'Mini-barrel',
				'Vannalar',
				'Sauna bochkalar',
			],
		},
		{
			title: 'Shakillar',
			items: [
				'Bochka mebellari',
				'Mini-barrel',
				'Vannalar',
				'Sauna bochkalar',
				'Bochka mebellari',
				'Mini-barrel',
				'Vannalar',
				'Sauna bochkalar',
			],
		},
		{
			title: 'Materiali',
			items: [
				'Bochka mebellari',
				'Mini-barrel',
				'Vannalar',
				'Sauna bochkalar',
				'Bochka mebellari',
				'Mini-barrel',
				'Vannalar',
				'Sauna bochkalar',
			],
		},
	]
	return (
		<>
			{data.map((section, sectionIndex) => (
				<div key={sectionIndex} className='catalog__wrapper__row'>
					<h4 className='catalog__wrapper__row__title'>{section.title}</h4>

					<div className='catalog__wrapper__col'>
						{section.items.map(item => {
							const currentIndex = indexCounter++

							return (
								<div
									key={currentIndex}
									className={`accordion__item ${
										activeTab === currentIndex ? 'active' : ''
									}`}
								>
									<p
										className='catalog__wrapper__col__text'
										onClick={() => toggle(currentIndex)}
									>
										{item}
										<img src={CatalogArrow} alt='' className='arrow' />
									</p>

									<ul className='catalog__wrapper__col__list'>
										<a href='' className='catalog__wrapper__col__list__item'>
											Uy uchun
										</a>
										<a href='' className='catalog__wrapper__col__list__item'>
											Zavod uchun
										</a>
									</ul>
								</div>
							)
						})}
					</div>
				</div>
			))}
		</>
	)
}

export default CatalogCardsActive
