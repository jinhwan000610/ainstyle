import React, { useEffect, useState } from "react";
import "./BoardWrite.css";

const CardDetail: React.FC = () => {
    const [imageUploaded, setImageUploaded] = useState<boolean>(false);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [category, setCategory] = useState<string>("");
    const [season, setSeason] = useState<string>("");
    const [style, setStyle] = useState<string>("");

    useEffect(() => {
        const input = document.getElementById(
            "attach"
        ) as HTMLInputElement | null;

        if (input) {
            const changeHandler = (e: Event) => {
                const target = e.target as HTMLInputElement;
                const files = target.files;

                if (files && files.length > 0) {
                    const file = files[0]; // 첫 번째 파일만 처리
                    const reader = new FileReader();

                    reader.readAsDataURL(file);

                    reader.addEventListener("load", (e) => {
                        const result = e.target?.result as string;

                        const imageUploadDiv = document.querySelector(
                            "div.image-upload"
                        ) as HTMLDivElement | null;

                        if (result.includes("image") && imageUploadDiv) {
                            imageUploadDiv.style.backgroundImage = `url("${result}")`;
                            setImageUploaded(true);
                            setImageFile(file);
                        } else if (imageUploadDiv) {
                            imageUploadDiv.style.backgroundImage = "";
                            setImageUploaded(false);
                            setImageFile(null);
                        }
                    });
                }
            };

            input.addEventListener("change", changeHandler);

            return () => {
                input.removeEventListener("change", changeHandler);
            };
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (imageUploaded && category && season && style) {
            // 콘솔에 올라간 값 체크
            console.log("이미지 파일:", imageFile);
            console.log("카테고리:", category);
            console.log("계절:", season);
            console.log("스타일:", style);

            // 실제 폼 제출 요청 (예: fetch 사용)
            // const formData = new FormData();
            // if (imageFile) {
            //     formData.append("image", imageFile);
            // }
            // formData.append("category", category);
            // formData.append("season", season);
            // formData.append("style", style);
            //
            // fetch('/upload', {
            //     method: 'POST',
            //     body: formData,
            // }).then(response => response.json())
            //   .then(data => console.log(data))
            //   .catch(error => console.error(error));
        } else {
            alert("모든 필드를 선택하고 이미지를 업로드해야 합니다.");
        }
    };

    return (
        <div className="board-write">
            <div className="board-write-title">
                <h3>스타일 업로드</h3>
            </div>
            <form className="board-write-form" onSubmit={handleSubmit}>
                <div className="board-write-form-container">
                    <label htmlFor="attach">
                        <div className="image-upload">
                            {!imageUploaded && "+"}
                        </div>
                    </label>
                    <input type="file" id="attach" />
                    <div className="tag-select-container">
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        >
                            <option value="" disabled>
                                카테고리
                            </option>
                            <option value="바다">바다</option>
                            <option value="여행">여행</option>
                            <option value="캠퍼스">캠퍼스</option>
                            <option value="카페">카페</option>
                            <option value="데이트">데이트</option>
                            <option value="결혼식">결혼식</option>
                            <option value="출근">출근</option>
                            <option value="데일리">데일리</option>
                            <option value="스포츠">스포츠</option>
                        </select>
                        <select
                            value={season}
                            onChange={(e) => setSeason(e.target.value)}
                            required
                        >
                            <option value="" disabled>
                                계절
                            </option>
                            <option value="봄">봄</option>
                            <option value="여름">여름</option>
                            <option value="가을">가을</option>
                            <option value="겨울">겨울</option>
                        </select>
                        <select
                            value={style}
                            onChange={(e) => setStyle(e.target.value)}
                            required
                        >
                            <option value="" disabled>
                                스타일
                            </option>
                            <option value="미니멀">미니멀</option>
                            <option value="이지캐주얼">이지캐주얼</option>
                            <option value="비지니스캐주얼">
                                비지니스캐주얼
                            </option>
                            <option value="아메카지">아메카지</option>
                            <option value="스트릿">스트릿</option>
                            <option value="시티보이">시티보이</option>
                            <option value="원마일웨어">원마일웨어</option>
                            <option value="스포티">스포티</option>
                            <option value="유니크">유니크</option>
                            <option value="레트로">레트로</option>
                            <option value="러블리">러블리</option>
                            <option value="모던캐주얼">모던캐주얼</option>
                        </select>
                        <button className="submit">업로드</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CardDetail;
