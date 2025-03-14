$(document).ready(function () {
    var originalPositions = {}; // 원래 위치 저장

    // 각 요소의 초기 위치 저장
    $(".draggable").each(function () {
        var id = $(this).attr("id");
        originalPositions[id] = $(this).position(); // 원래 위치 저장
    });

    // 드래그 가능한 항목 설정
    $(".draggable").draggable({
        revert: "invalid", // 드롭되지 않으면 원위치로 복귀
        helper: "clone", // 원본 요소 그대로 사용
    });

    // 정답 위치 설정
    $(".rock").droppable({
        accept: ".draggable", // 드래그 가능한 요소만 허용
        drop: function (event, ui) {
            var draggedId = ui.helper.attr("id"); // 드래그된 요소의 ID 가져오기
            console.log(draggedId);
            var leftRockId = $(this).attr("id"); // 현재 드롭된 위치의 ID

            // 정답 판별 로직
            if (draggedId === "right-rock1" && leftRockId === "left-rock1" ||
                draggedId === "right-rock2" && leftRockId === "left-rock2" ||
                draggedId === "right-rock3" && leftRockId === "left-rock3") {
                // 정답이면 위치 이동
                var targetPosition = $(this).position();

                // 클론된 요소의 위치를 정답 위치에 맞게 설정
                ui.helper.animate({
                    top: targetPosition.top + "px",
                    left: targetPosition.left + "px"
                }, 300, function () {
                    // 애니메이션 끝난 후 클론을 해당 위치에 추가
                    $(this).appendTo($(this).closest('.rock-list')); // parent로 옮기기
                    $(this).css({
                        position: "absolute", // 클론이 부모 요소 내에서 절대 위치로 배치되도록
                        top: targetPosition.top + "px",
                        left: targetPosition.left + "px"
                    });
                });
            } else {
                // 오답이면 원래 위치로 복귀
                var originalPosition = originalPositions[draggedId];
                ui.helper.animate({
                    top: originalPosition.top + "px",
                    left: originalPosition.left + "px"
                }, 300); // 원위치로 애니메이션
            }
        }
    });
});
