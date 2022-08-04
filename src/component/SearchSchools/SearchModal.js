import React from 'react'

function SearchModal() {
  return (
    <div>
        <div className="modelbox">
                    <div className={`model ${display && 'show'}`} modelFilter id="modelFilter">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <ListFilter />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default SearchModal