import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { FileUpload } from 'primereact/fileupload';
import { Button } from 'primereact/button';

export const InputDemo = () => {
    

    return (
        <div>
            <h2>活動申請</h2>
            <hr></hr>
            <div className="grid p-fluid">
                <div className="grid">
                    
                    <div className="col-12 md:col-6">
                        <h2>代碼/學號</h2>
                        <div className="field">
                            <label htmlFor="申請人學號">申請人學號</label>
                            <InputText type="text" id="申請人學號" />
                        </div>
                        <div className="field">
                            <label htmlFor="系所">系所</label>
                            <InputText type="text" id="系所" />
                        </div>
                        <div className="field">
                            <label htmlFor="電話">電話</label>
                            <InputText type="text" id="電話" />         
                        </div>
                        <div className="field">
                            <label htmlFor="活動名稱">活動名稱</label>
                            <InputText type="text" id="活動名稱" />      
                        </div>
                        <div className="field">
                            <label htmlFor="活動地點">活動地點</label>
                            <InputText type="text" id="活動地點" />         
                        </div>
                        <div>
                        <h5>企劃書上傳</h5>
                        <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" maxFileSize={1000000}/>
                        </div>
                    </div>
                    <div className="col-12 md:col-6">
                        <h2>社團名稱</h2>
                        <div className="field">
                            <label htmlFor="申請人姓名">申請人姓名</label>
                            <InputText type="text" id="申請人姓名" />         
                        </div>
                        <div className="field">
                            <label htmlFor="年級">年級</label>
                            <Dropdown id="年級" options={["一","二","三","四"]}/>
                        </div>
                        <div className="field">
                            <label htmlFor="Email">Email</label>
                            <InputText type="text" id="Email" />         
                        </div>
                        <div className="field">
                            <label htmlFor="活動總參加人數">活動總參加人數</label>
                            <InputNumber id="活動總參加人數" />         
                        </div>
                        <div className="grid p-fluid">
                        <div className="col-12 md:col-6">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-user"></i>
                                </span>
                                <InputText placeholder="Username" />
                            </div>
                        </div>

                        <div className="col-12 md:col-6">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon"><i className="pi pi-shopping-cart"></i></span>
                                <span className="p-inputgroup-addon"><i className="pi pi-globe"></i></span>
                                <InputText placeholder="Price" />
                                <span className="p-inputgroup-addon">$</span>
                                <span className="p-inputgroup-addon">.00</span>
                            </div>
                        </div>

                        <div className="col-12 md:col-6">
                            <div className="p-inputgroup">
                                <Button label="Search" />
                                <InputText placeholder="Keyword" />
                            </div>
                        </div>

                        <div className="col-12 md:col-6">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    <InputText></InputText>
                                </span>
                                <InputText placeholder="Confirm" />
                                </div>
                            </div>
                        </div>
                        <Button label="Submit" className="mr-2 mb-2"></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(InputDemo, comparisonFn);