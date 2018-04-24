<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>4 in a row</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel='stylesheet' href='/css/style.css' />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous">
    </head>
    <body>
        <div class="main-wrapper">
            <div class="app" id="app">
                <article class="content forms-page">
                    <section class="section mt-2">
                        <div class="row">

                        <div class="offset-md-3 col-md-6 col-12">
                            <div id="connect-4-card" class="card">
                            
                                <div class="card-header">
                                    <div class="header-block">
                                        <h3 class="title">
                                            <i class="fa fa-gamepad"></i>&nbsp;&nbsp;Puissance 4
                                        </h3>
                                    </div>
                                    
                                </div>
                                <div class="card-body">
                                    <div id="connect-4" class="container">
                                        <? for($i = 5 ; $i >= 0 ; $i--) { ?>
                                            <div class="row justify-content-between">
                                            <? for( $j = 0; $j < 7 ; $j++) { ?>
                                                <div id="box<?=$j.'_'.$i?>" class="col-xs box empty colonne<?=$j?>" data-column="<?=$j?>" >
                                                    &nbsp;
                                                </div>
                                            <? } ?>
                                            </div>
                                        <? } ?>
                                    </div>
                                    <div class="pedestal">&nbsp;</div>
                                </div>
                                <div class="card-footer">
                                    <div class="row no-margin justify-content-between">
                                        <div class="col-6">
                                            <a href="https://github.com/bbastou/4-in-a-row" class="btn btn-dark btn-lg mr-3" >
                                            <i class="fab fa-github mr-2"></i>Github
                                            </a>
                                            <button id="restart-connect-4" type="button" class="btn btn-success btn-lg">
                                                <i class="fa fa-redo fa-flip-horizontal mr-2"></i>Restart
                                            </button>
                                        </div>
                                        <div class="game-result col-6"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </section>
                </article>
          </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="/js/app.js"></script>
  </body>
</html>