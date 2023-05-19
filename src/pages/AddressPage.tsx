import React, { useState } from 'react'

import SectionWrapper from './SectionWrapper'
import SearchIcon from '../components/icons/Search'
import classes from './AddressPage.module.scss'

type Suggestion = {
    value: string
}

interface searchResultResponse {
    suggestions: Array<Suggestion>
}

function getSuggestionValues(searchResult: searchResultResponse): Array<string> {
    return searchResult?.suggestions.map((suggestion: any) => suggestion.value)
}

const AddressPage = () => {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState<Array<string>>([])
    const searchDisabled = searchValue.length < 3

    function handleSearchInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchValue(e.currentTarget.value)
    }

    function handleSearchButtonClick() {
        fetchAddressSuggestions()
    }

    function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter' && !searchDisabled) {
            fetchAddressSuggestions()
        }
    }

    async function fetchAddressSuggestions() {
        try {
            const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
            const token = "d8620aa0c06d01956bc62fdc728e3c3bafb2acd7";
            const response = await fetch(url, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Token " + token
                },
                body: JSON.stringify({ query: searchValue, count: 20 })
            });
            const result = await response.json();
            if (result) {
                setSearchResult(getSuggestionValues(result))
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <main className={classes.Page}>
            <SectionWrapper sectionTitle="Поиск адресов" sectionSubTitle="Введите интересующий вас адрес">
                <div className={classes.sectionContent}>
                    <section className={classes.searchBlock}>
                        <input type="text" placeholder="Введите интересующий вас адрес" value={searchValue} onKeyDown={handleKeyPress} onChange={handleSearchInputChange} />
                        <button onClick={handleSearchButtonClick} {...searchDisabled ? { disabled: true } : undefined}>
                            <span className={classes.buttonIcon}><SearchIcon color="#FFFFFF" /></span>
                            <span className={classes.buttonText}>Поиск</span>
                        </button>
                    </section>
                </div>
            </SectionWrapper>
            {
                searchResult.length !== 0 &&
                <div className={classes.resultBlock}>
                    <SectionWrapper sectionTitle="Адреса">
                        <div className={classes.sectionContent}>
                            <div className={classes.addressItems}>
                                {
                                    searchResult.length !== 0 &&
                                    searchResult.map(item => <div className={classes.addressItem}>{item}</div>)
                                }
                            </div>
                        </div>
                    </SectionWrapper>
                </div>
            }
        </main>
    )
}

export default AddressPage