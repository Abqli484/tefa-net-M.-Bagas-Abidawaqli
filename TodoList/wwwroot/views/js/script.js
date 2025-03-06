const apiUrl = "https://localhost:7229/api/lists"; 


function fetchLists() {
    $.ajax({
        url: apiUrl,
        type: "GET",
        success: function (data) {
            console.log("Data yang diterima:", data); 
            $("#listTable").empty(); 
            data.forEach(item => {
                $("#listTable").append(`
                    <tr>
                        <td>${item.judul}</td>
                        <td>${item.deskripsi}</td>
                        <td>
                            <button onclick="editList('${item.id}', '${item.judul}', '${item.deskripsi}')">Edit</button>
                            <button onclick="deleteList('${item.id}')">Hapus</button>
                        </td>
                    </tr>
                `);
            });
        },
        error: function (xhr, status, error) {
            console.error("Error mengambil data:", error);
            alert("Gagal mengambil data. Pastikan API berjalan.");
        }
    });
}


$("#addForm").submit(function (e) {
    e.preventDefault();
    const id = $("#todoId").val();
    const newList = {
        judul: $("#judul").val(),
        deskripsi: $("#deskripsi").val()
    };

    if (id) {
        
        $.ajax({
            url: `${apiUrl}/${id}`,
            type: "PUT",
            contentType: "application/json",
            data: JSON.stringify(newList),
            success: function () {
                console.log("Data berhasil diperbarui");
                resetForm();
                fetchLists();
            },
            error: function () {
                alert("Gagal memperbarui data.");
            }
        });
    } else {
        
        $.ajax({
            url: apiUrl,
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(newList),
            success: function () {
                console.log("Data berhasil ditambahkan");
                resetForm();
                fetchLists();
            },
            error: function () {
                alert("Gagal menambahkan data.");
            }
        });
    }
});


function deleteList(id) {
    if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
        $.ajax({
            url: `${apiUrl}/${id}`,
            type: "DELETE",
            success: function () {
                console.log("Data berhasil dihapus");
                fetchLists();
            },
            error: function () {
                alert("Gagal menghapus data.");
            }
        });
    }
}


function editList(id, judul, deskripsi) {
    $("#todoId").val(id);
    $("#judul").val(judul);
    $("#deskripsi").val(deskripsi);
    $("#cancelEdit").show();
}


function resetForm() {
    $("#todoId").val("");
    $("#judul").val("");
    $("#deskripsi").val("");
    $("#cancelEdit").hide();
}


$("#cancelEdit").click(resetForm);


$(document).ready(fetchLists);
