<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">
<head>
    <script src="/docs/5.3/assets/js/color-modes.js"></script>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.111.3">
    <title>PHP and Bootstrap UI Kit | Management Information System</title>
    <link rel="stylesheet" href="../JTETestingPCC1/css/mystyle.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

</head>
<body class="bg-dark">
  <header class="barnav1 p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="../JTETestingPCC1/index.php#PCCHome" class="nav-link px-2 text-secondary">Home</a></li>
          <li><a href="../JTETestingPCC1/index.html#PCCabout" class="nav-link px-2 text-white">About</a></li>
          <li><a href="../JTETestingPCC1/crudop.php" class="nav-link px-2 text-white">CRUD Operations</a></li>
          <li><a href="../JTETestingPCC1/index.html#PCCfaqs" class="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="../JTETestingPCC1/index.html#PCCpricing" class="nav-link px-2 text-white">Pricing</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search">
        </form>

        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2">Login</button>
          <button type="button" class="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
  <div class="PCC-mainbackground">

    <div class="crudop-panel">
      <div class="container">
      	<h2 class="text-uppercase text-center">PCC Management Information System | <span class="text-secondary"> Bootstrap UI Kit</span></h2> 
        <br>
        <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">
            
            Add User
          </button>


      </div>

    </div> <!--  -->



    <!-- Pop Up Modal -->
<div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success">Save changes</button>
      </div>
    </div>
  </div>
</div>


    <!-- End of Pop Up Modal  -->


      <footer class="container">
        <!-- <p class="float-end"><a href="#">Back to top</a></p> -->
        <hr class="featurette-divider text-light">
        <p class="text-info">Copyright &copy; 1973 - <span class="fw-bold text-warning"><?php echo date("Y");?></span> PATIENT CARE CORPORATION's BLOG &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
      </footer>
      
  </div>
      <!-- ajax scripts -->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
      <!-- bootstrap scripts -->
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
</body>
</html>