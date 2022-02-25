<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>confirm重写</title>
  <link href="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">

  <style type="text/css">
    .console-show {
      margin-top: 200px;
      background-color: red;
      color: white;
    }
  </style>
</head>

<body>
  <div class="text-center">
    <h1>confirm重写</h1>
    <button type="button" class="btn btn-info" id="confirmBtn">Confirm</button>
    <button type="button" class="btn btn-danger" id="alertBtn">Alert</button>
    <div class="console-show"></div>
  </div>
  <!--下面是模态框-->
  <div class="modal fade" id="alertModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span
              class="sr-only">Close</span></button>
          <h4 class="modal-title"></h4>
        </div>
        <div class="modal-body">
          <p></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger sureBtn" data-dismiss="modal">确定</button>
        </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>
  <!-- /.modal -->

  <!--下面是模态框-->
  <div class="modal fade" id="confirmModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span
              class="sr-only">Close</span></button>
          <h4 class="modal-title"></h4>
        </div>
        <div class="modal-body">
          <p></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default cancelBtn" data-dismiss="modal">取消</button>
          <button type="button" class="btn btn-danger sureBtn" data-dismiss="modal">确定</button>
        </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>
  <!-- /.modal -->
</body>


<script src="http://cdn.static.runoob.com/libs/jquery/2.1.1/jquery.min.js"></script>

<script src="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/js/bootstrap.min.js"></script>


<script type="text/javascript">
  function ReAlert (title, content) {
    var alertPromise = new Promise(function (resolve, reject) {
      $('#alertModal .modal-title').text(title);
      $('#alertModal .modal-body p').text(content);
      $('#alertModal').modal('show');
      $('#alertModal .sureBtn').off('click').click(function () {
        resolve(content);
      })
    })
    return alertPromise;
  };


  function ReConfirm (title, content) {
    var confirmPromise = new Promise(function (resolve, reject) {
      $('#confirmModal .modal-title').text(title);
      $('#confirmModal .modal-body p').text(content);
      $('#confirmModal').modal('show');
      $('#confirmModal .sureBtn').off('click').click(resolve);
      $('#confirmModal .cancelBtn').off('click').click(reject);
    })
    return confirmPromise;
  };

  $('#alertBtn').click(function () {
    ReAlert('提示', '确定加入索尼大法？').then(function (str) {
      console.log(str);
      $('.console-show').text('Prmoise_alert页面点击"确定"');
    })
  });

  $('#confirmBtn').click(function () {
    ReConfirm("警告", '确认退出索尼教？').then(function (e) {
      console.log('e', e)
      console.log('确定被点击，执行后续操作');
      $('.console-show').text('Promise_resolve_confirm页面点击"确定"');
    }, function (r) {
      console.log('r', r)
      console.log("取消被点击，返回之前的操作");
      $('.console-show').text('Promise_reject_confirm页面点击"取消"');
    })
  })
</script>

</html>