 $(document).ready(function () {
         $("#save").click(function () {
            $.ajax({
                url: "./create",
                type: "post",
                data: {
                    name: $("#staffName").val(),
                    number: $("#staffNumber").val(),
                    sex: $("#staffSex").val(),
                    job: $("#staffJob").val()
                },
                dataType: "json"
            }).done(function (data) {
                $("#createResult").html(data);
            }).fail(function (err) {
                if (typeof fnCallback === "function")
                    fnCallback(err);
            });
        });
