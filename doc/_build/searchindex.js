Search.setIndex({docnames:["content/adapters","content/artificial_neural_networks","content/base","content/bayes","content/beamformer","content/epifocus","content/focuss","content/loreta","content/matching_pursuit","content/minimum_norm","content/music","content/sfocuss","content/smooth_matching_pursuit","content/solvers","content/stampc","content/wrop","help","index"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["content\\adapters.rst","content\\artificial_neural_networks.rst","content\\base.rst","content\\bayes.rst","content\\beamformer.rst","content\\epifocus.rst","content\\focuss.rst","content\\loreta.rst","content\\matching_pursuit.rst","content\\minimum_norm.rst","content\\music.rst","content\\sfocuss.rst","content\\smooth_matching_pursuit.rst","content\\solvers.rst","content\\stampc.rst","content\\wrop.rst","help.md","index.rst"],objects:{"invert.adapters.focuss":[[6,0,1,"","focuss"],[11,0,1,"","s_focuss"]],"invert.adapters.stamp":[[14,0,1,"","stampc"]],"invert.solvers":[[2,1,0,"-","base"],[3,1,0,"-","bayes"],[4,1,0,"-","beamformer"],[3,1,0,"-","empirical_bayes"],[5,1,0,"-","epifocus"],[1,1,0,"-","esinet"],[7,1,0,"-","loreta"],[8,1,0,"-","matching_pursuit"],[9,1,0,"-","minimum_norm_estimates"],[10,1,0,"-","music"],[7,1,0,"-","smap"],[12,1,0,"-","smooth_matching_pursuit"],[15,1,0,"-","wrop"]],"invert.solvers.base":[[2,2,1,"","BaseSolver"],[2,2,1,"","InverseOperator"]],"invert.solvers.base.BaseSolver":[[2,3,1,"","apply_inverse_operator"],[2,3,1,"","calc_area_tri"],[2,3,1,"","delete_from_list"],[2,3,1,"","euclidean_distance"],[2,3,1,"","filter_norms"],[2,3,1,"","find_corner"],[2,3,1,"","get_alphas"],[2,3,1,"","make_inverse_operator"],[2,3,1,"","prepare_forward"],[2,3,1,"","regularise_gcv"],[2,3,1,"","regularise_lcurve"],[2,3,1,"","regularise_product"],[2,3,1,"","save"],[2,3,1,"","source_to_object"],[2,3,1,"","unpack_data_obj"]],"invert.solvers.base.InverseOperator":[[2,3,1,"","has_multiple_operators"]],"invert.solvers.bayes":[[3,2,1,"","SolverBCS"],[3,2,1,"","SolverGammaMAP"],[3,2,1,"","SolverGammaMAPMSP"],[3,2,1,"","SolverSourceMAP"],[3,2,1,"","SolverSourceMAPMSP"]],"invert.solvers.bayes.SolverBCS":[[3,3,1,"","apply_inverse_operator"],[3,3,1,"","calc_bcs_solution"],[3,3,1,"","make_inverse_operator"]],"invert.solvers.bayes.SolverGammaMAP":[[3,3,1,"","apply_inverse_operator"],[3,3,1,"","make_gamma_map_inverse_operator"],[3,3,1,"","make_inverse_operator"]],"invert.solvers.bayes.SolverGammaMAPMSP":[[3,3,1,"","apply_inverse_operator"],[3,4,1,"","forward"],[3,3,1,"","get_smooth_prior_cov"],[3,3,1,"","make_inverse_operator"],[3,3,1,"","make_source_map_inverse_operator"]],"invert.solvers.bayes.SolverSourceMAP":[[3,3,1,"","apply_inverse_operator"],[3,3,1,"","make_inverse_operator"],[3,3,1,"","make_source_map_inverse_operator"]],"invert.solvers.bayes.SolverSourceMAPMSP":[[3,3,1,"","apply_inverse_operator"],[3,3,1,"","make_inverse_operator"],[3,3,1,"","make_source_map_inverse_operator"]],"invert.solvers.beamformer":[[4,2,1,"","SolverESMV"],[4,2,1,"","SolverHOCMV"],[4,2,1,"","SolverLCMV"],[4,2,1,"","SolverMCMV"],[4,2,1,"","SolverMVAB"],[4,2,1,"","SolverReciPSIICOS"],[4,2,1,"","SolverSAM"],[4,2,1,"","SolverSMV"],[4,2,1,"","SolverWNMV"]],"invert.solvers.beamformer.SolverESMV":[[4,3,1,"","apply_inverse_operator"],[4,4,1,"","forward"],[4,3,1,"","make_inverse_operator"]],"invert.solvers.beamformer.SolverHOCMV":[[4,3,1,"","apply_inverse_operator"],[4,4,1,"","forward"],[4,3,1,"","make_inverse_operator"]],"invert.solvers.beamformer.SolverLCMV":[[4,3,1,"","apply_inverse_operator"],[4,3,1,"","make_inverse_operator"]],"invert.solvers.beamformer.SolverMCMV":[[4,3,1,"","apply_inverse_operator"],[4,3,1,"","make_inverse_operator"]],"invert.solvers.beamformer.SolverMVAB":[[4,3,1,"","apply_inverse_operator"],[4,3,1,"","make_inverse_operator"]],"invert.solvers.beamformer.SolverReciPSIICOS":[[4,3,1,"","apply_inverse_operator"],[4,3,1,"","make_inverse_operator"]],"invert.solvers.beamformer.SolverSAM":[[4,3,1,"","apply_inverse_operator"],[4,3,1,"","make_inverse_operator"]],"invert.solvers.beamformer.SolverSMV":[[4,3,1,"","apply_inverse_operator"],[4,3,1,"","make_inverse_operator"]],"invert.solvers.beamformer.SolverWNMV":[[4,3,1,"","apply_inverse_operator"],[4,4,1,"","forward"],[4,3,1,"","make_inverse_operator"]],"invert.solvers.empirical_bayes":[[3,2,1,"","SolverChampagne"],[3,2,1,"","SolverEMChampagne"],[3,2,1,"","SolverLowSNRChampagne"],[3,2,1,"","SolverMMChampagne"],[3,2,1,"","SolverTEMChampagne"]],"invert.solvers.empirical_bayes.SolverChampagne":[[3,3,1,"","apply_inverse_operator"],[3,3,1,"","champagne"],[3,3,1,"","make_inverse_operator"]],"invert.solvers.empirical_bayes.SolverEMChampagne":[[3,3,1,"","apply_inverse_operator"],[3,3,1,"","em_champagne"],[3,3,1,"","make_inverse_operator"]],"invert.solvers.empirical_bayes.SolverLowSNRChampagne":[[3,3,1,"","apply_inverse_operator"],[3,3,1,"","low_snr_champagne"],[3,3,1,"","make_inverse_operator"]],"invert.solvers.empirical_bayes.SolverMMChampagne":[[3,3,1,"","apply_inverse_operator"],[3,3,1,"","make_inverse_operator"],[3,3,1,"","mm_champagne"]],"invert.solvers.empirical_bayes.SolverTEMChampagne":[[3,3,1,"","apply_inverse_operator"],[3,3,1,"","make_inverse_operator"],[3,3,1,"","tem_champagne"]],"invert.solvers.epifocus":[[5,2,1,"","SolverEPIFOCUS"]],"invert.solvers.epifocus.SolverEPIFOCUS":[[5,3,1,"","apply_inverse_operator"],[5,3,1,"","make_inverse_operator"]],"invert.solvers.esinet":[[1,2,1,"","SolverCNN"],[1,2,1,"","SolverCovCNN"],[1,2,1,"","SolverFC"],[1,2,1,"","SolverLSTM"],[1,0,1,"","correlation_criterion"],[1,0,1,"","solve_p"],[1,0,1,"","solve_p_wrap"]],"invert.solvers.esinet.SolverCNN":[[1,3,1,"","apply_inverse_operator"],[1,3,1,"","apply_model"],[1,3,1,"","build_model"],[1,3,1,"","create_generator"],[1,4,1,"","forward"],[1,3,1,"","make_inverse_operator"],[1,3,1,"","train_model"]],"invert.solvers.esinet.SolverCovCNN":[[1,3,1,"","apply_inverse_operator"],[1,3,1,"","apply_model"],[1,3,1,"","build_model"],[1,3,1,"","create_generator"],[1,4,1,"","forward"],[1,3,1,"","make_inverse_operator"],[1,3,1,"","train_model"]],"invert.solvers.esinet.SolverFC":[[1,3,1,"","apply_inverse_operator"],[1,3,1,"","apply_model"],[1,3,1,"","build_model"],[1,3,1,"","create_generator"],[1,3,1,"","make_inverse_operator"],[1,3,1,"","train_model"]],"invert.solvers.esinet.SolverLSTM":[[1,3,1,"","apply_inverse_operator"],[1,3,1,"","apply_model"],[1,3,1,"","build_model"],[1,3,1,"","build_model2"],[1,3,1,"","create_generator"],[1,4,1,"","forward"],[1,3,1,"","make_inverse_operator"],[1,3,1,"","train_model"]],"invert.solvers.loreta":[[7,2,1,"","SolverELORETA"],[7,2,1,"","SolverLORETA"],[7,2,1,"","SolverSLORETA"],[7,0,1,"","calc_eloreta_D2"]],"invert.solvers.loreta.SolverELORETA":[[7,3,1,"","apply_inverse_operator"],[7,3,1,"","make_inverse_operator"]],"invert.solvers.loreta.SolverLORETA":[[7,3,1,"","apply_inverse_operator"],[7,3,1,"","make_inverse_operator"]],"invert.solvers.loreta.SolverSLORETA":[[7,3,1,"","apply_inverse_operator"],[7,3,1,"","make_inverse_operator"]],"invert.solvers.matching_pursuit":[[8,2,1,"","SolverCOSAMP"],[8,2,1,"","SolverOMP"],[8,2,1,"","SolverREMBO"],[8,2,1,"","SolverSOMP"],[8,2,1,"","SolverSP"],[8,2,1,"","SolverSSP"]],"invert.solvers.matching_pursuit.SolverCOSAMP":[[8,3,1,"","apply_inverse_operator"],[8,3,1,"","calc_cosamp_solution"],[8,3,1,"","make_inverse_operator"]],"invert.solvers.matching_pursuit.SolverOMP":[[8,3,1,"","apply_inverse_operator"],[8,3,1,"","calc_omp_solution"],[8,3,1,"","make_inverse_operator"]],"invert.solvers.matching_pursuit.SolverREMBO":[[8,3,1,"","apply_inverse_operator"],[8,3,1,"","calc_omp_solution"],[8,3,1,"","calc_rembo_solution"],[8,4,1,"","forward"],[8,3,1,"","make_inverse_operator"]],"invert.solvers.matching_pursuit.SolverSOMP":[[8,3,1,"","apply_inverse_operator"],[8,3,1,"","calc_somp_solution"],[8,3,1,"","make_inverse_operator"]],"invert.solvers.matching_pursuit.SolverSP":[[8,3,1,"","apply_inverse_operator"],[8,3,1,"","calc_sp_solution"],[8,4,1,"","forward"],[8,3,1,"","make_inverse_operator"]],"invert.solvers.matching_pursuit.SolverSSP":[[8,3,1,"","apply_inverse_operator"],[8,3,1,"","calc_ssp_solution"],[8,3,1,"","make_inverse_operator"]],"invert.solvers.minimum_norm_estimates":[[9,2,1,"","SolverDSPM"],[9,2,1,"","SolverMNE"],[9,2,1,"","SolverMinimumL1L2Norm"],[9,2,1,"","SolverMinimumL1Norm"],[9,2,1,"","SolverMinimumL1NormGPT"],[9,2,1,"","SolverWMNE"]],"invert.solvers.minimum_norm_estimates.SolverDSPM":[[9,3,1,"","apply_inverse_operator"],[9,3,1,"","make_inverse_operator"]],"invert.solvers.minimum_norm_estimates.SolverMNE":[[9,3,1,"","apply_inverse_operator"],[9,3,1,"","make_inverse_operator"]],"invert.solvers.minimum_norm_estimates.SolverMinimumL1L2Norm":[[9,3,1,"","apply_inverse_operator"],[9,3,1,"","calc_l1l2_solution"],[9,3,1,"","make_inverse_operator"]],"invert.solvers.minimum_norm_estimates.SolverMinimumL1Norm":[[9,3,1,"","apply_inverse_operator"],[9,3,1,"","fista"],[9,3,1,"","make_inverse_operator"],[9,3,1,"","soft_threshold"]],"invert.solvers.minimum_norm_estimates.SolverMinimumL1NormGPT":[[9,3,1,"","apply_inverse_operator"],[9,3,1,"","grad_f"],[9,3,1,"","make_inverse_operator"],[9,3,1,"","soft_threshold"],[9,3,1,"","solve"]],"invert.solvers.minimum_norm_estimates.SolverWMNE":[[9,3,1,"","apply_inverse_operator"],[9,3,1,"","make_inverse_operator"]],"invert.solvers.music":[[10,2,1,"","SolverJAZZMUSIC"],[10,2,1,"","SolverMUSIC"],[10,2,1,"","SolverRAPMUSIC"],[10,2,1,"","SolverTRAPMUSIC"]],"invert.solvers.music.SolverJAZZMUSIC":[[10,3,1,"","apply_inverse_operator"],[10,3,1,"","apply_jazzmusic"],[10,3,1,"","make_inverse_operator"],[10,3,1,"","make_jazz"]],"invert.solvers.music.SolverMUSIC":[[10,3,1,"","apply_inverse_operator"],[10,3,1,"","apply_music"],[10,3,1,"","make_inverse_operator"]],"invert.solvers.music.SolverRAPMUSIC":[[10,3,1,"","apply_inverse_operator"],[10,3,1,"","apply_rapmusic"],[10,3,1,"","make_inverse_operator"]],"invert.solvers.music.SolverTRAPMUSIC":[[10,3,1,"","apply_inverse_operator"],[10,3,1,"","apply_trapmusic"],[10,3,1,"","make_inverse_operator"]],"invert.solvers.smap":[[7,2,1,"","SolverSMAP"]],"invert.solvers.smap.SolverSMAP":[[7,3,1,"","apply_inverse_operator"],[7,3,1,"","make_inverse_operator"]],"invert.solvers.smooth_matching_pursuit":[[12,2,1,"","SolverISubSMP"],[12,2,1,"","SolverSMP"],[12,2,1,"","SolverSSMP"],[12,2,1,"","SolverSubSMP"]],"invert.solvers.smooth_matching_pursuit.SolverISubSMP":[[12,3,1,"","apply_inverse_operator"],[12,3,1,"","calc_isubsmp_solution"],[12,3,1,"","calc_subsmp_solution"],[12,4,1,"","forward"],[12,3,1,"","make_inverse_operator"]],"invert.solvers.smooth_matching_pursuit.SolverSMP":[[12,3,1,"","apply_inverse_operator"],[12,3,1,"","calc_smp_solution"],[12,4,1,"","forward"],[12,3,1,"","make_inverse_operator"]],"invert.solvers.smooth_matching_pursuit.SolverSSMP":[[12,3,1,"","apply_inverse_operator"],[12,3,1,"","calc_ssmp_solution"],[12,4,1,"","forward"],[12,3,1,"","make_inverse_operator"]],"invert.solvers.smooth_matching_pursuit.SolverSubSMP":[[12,3,1,"","apply_inverse_operator"],[12,3,1,"","calc_smp_solution"],[12,3,1,"","calc_subsmp_solution"],[12,4,1,"","forward"],[12,3,1,"","make_inverse_operator"]],"invert.solvers.wrop":[[15,2,1,"","SolverBackusGilbert"],[15,2,1,"","SolverLAURA"]],"invert.solvers.wrop.SolverBackusGilbert":[[15,3,1,"","apply_inverse_operator"],[15,3,1,"","make_inverse_operator"]],"invert.solvers.wrop.SolverLAURA":[[15,3,1,"","apply_inverse_operator"],[15,3,1,"","make_inverse_operator"]]},objnames:{"0":["py","function","Python function"],"1":["py","module","Python module"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:function","1":"py:module","2":"py:class","3":"py:method","4":"py:attribute"},terms:{"0":[1,2,3,4,6,7,8,9,10,11,12,14,15],"001":[1,3,9],"005":[7,9],"01":[3,6,9,11],"0710":7,"08":3,"1":[1,2,3,4,5,7,8,9,10,11,12,14],"10":[1,6,8,11,12],"100":[1,3,7,9],"1000":[1,3,9],"11":[],"1104":3,"1120":3,"116386":4,"117677":4,"12":[4,7,8,12],"1289":[8,12],"1306":[8,12],"131":5,"137":5,"14":[4,5,10],"15":[],"16":3,"167":10,"175":4,"179":9,"18":10,"183":9,"188":4,"19":12,"1935":3,"1939":3,"194":9,"1988":4,"1997":7,"1999":[4,7,9,10],"1e":[3,9],"2":[1,3,4,5,8,9,10,12,15],"20":1,"2000":9,"2001":[5,10],"2002":7,"2006":[8,12],"2007":[7,8,12],"2008":[2,3,8,9,11],"2009":[3,8,9],"2010":3,"2011":[7,8,12],"2012":3,"2013":4,"2014":4,"2018":[3,10],"202":9,"2020":4,"2021":4,"2022":[10,12],"208":4,"21":3,"2230":8,"2249":8,"228":4,"2346":3,"2356":3,"24":[2,4,7],"25":[1,14],"256":1,"26":[8,9],"26th":3,"3":[3,4,8,9,10],"30":10,"300":1,"301":8,"305":3,"321":8,"323":3,"3264":4,"3277":4,"33":[2,9,11],"332":10,"3341":7,"340":10,"374":7,"385":7,"39":3,"3d":7,"4":[4,8,12],"40":17,"4053":[8,12],"4085":[8,12],"44":[3,7],"45":[],"4655":[8,12],"4666":[8,12],"4692":8,"47":10,"4702":8,"49":3,"5":[1,2,3,4,7,8,9,11],"500":[],"52":[8,12],"53":[8,12],"55":[8,9],"552666":[],"56":[3,8],"59":[8,12],"6":[3,9,10],"60":3,"600":[],"616":[],"641":3,"655":3,"67":9,"7":4,"73":10,"75":[1,7,9],"83":10,"86":[7,9],"9":[8,9,12],"93":4,"947":3,"95":10,"966":3,"case":15,"class":[1,3,4,5,7,8,9,10,12,13,15],"default":[1,3,9],"float":[1,2,3,4,5,6,7,8,9,10,11,12,15],"function":[1,2,3,4,7,9],"h\u00e4m\u00e4l\u00e4inen":[],"import":17,"int":[1,2,3,4,6,7,8,9,10,11,14],"long":[1,13],"m\u00e4kel\u00e4":10,"new":[1,3,6,11,14],"return":[1,2,3,4,5,6,7,8,9,10,11,12,14,15],"short":[1,13],"static":[2,9],"true":[1,2,3,4,10,12],"try":2,A:[2,3,4,7,8,9,12,13],If:[1,2,3,10,12],In:[3,17],It:[8,9,15],The:[1,2,3,4,5,6,7,8,9,10,11,12,14,15],These:0,_1:9,_2:9,__:[],_build:16,ab:2,ac:2,accur:2,activ:[1,3,5,7,9,10],activation_funct:1,adapt:[4,6,11,13,14],adjust:9,advanc:[3,4],advic:15,against:2,ai:9,al:[7,11],algorithm:[0,3,6,7,8,9,11,12],all:[1,13],alpha:[1,2,3,4,5,6,7,8,9,10,11,12,15],alpha_0:3,alreadi:[],also:12,alter:0,altern:1,an:[2,17],analys:4,analysi:[2,8,9,11],anatomo:7,andino:5,anoth:3,apertur:[4,13],api:[],appli:[1,2,3,4,5,7,8,9,10,12,13,15,17],applic:[8,12],apply_inverse_oper:[1,2,3,4,5,7,8,9,10,12,15,17],apply_jazzmus:10,apply_model:1,apply_mus:10,apply_rapmus:10,apply_trapmus:10,approach:[4,7],ar:[0,1,2,3,10],arbitrari:8,area:2,arg:[1,2,3,4,5,7,8,9,10,12,15],arrai:[2,3,9],articl:7,artificial_neural_network:[],arxiv:7,assess:7,assp:4,assum:3,atom:8,attia:3,auto:[1,2,3,4,5,7,8,9,10,12,15],autoregress:[13,15],avail:[3,9,13],averag:[2,13,15],avoid:3,ax:9,b:[2,3,4,9,11,16],backu:[13,15],bad_idc:2,baillet:[7,10],barreto:3,base:[1,3,4,8,9,11,13],basesolv:2,batch:1,batch_repetit:1,batch_siz:1,bay:3,bayesian:7,bc:[3,13],beamform:[],beck:9,belliveau:9,between:2,bioelectromagnet:[7,9],biomagnet:4,biomed:[4,7],bool:[2,3,4,10,12],boost:[8,13],brain:[5,7,10],braindatalab:3,bsi:3,bucklei:4,buckner:9,build:[1,16],build_model2:1,build_model:1,c:[0,3,4,5,8,10,12],calc_area_tri:2,calc_bcs_solut:3,calc_cosamp_solut:8,calc_eloreta_d2:7,calc_isubsmp_solut:12,calc_l1l2_solut:9,calc_omp_solut:8,calc_rembo_solut:8,calc_smp_solut:12,calc_somp_solut:8,calc_sp_solut:8,calc_ssmp_solut:12,calc_ssp_solut:8,calc_subsmp_solut:12,calcul:[0,1,2,3,4,5,7,8,9,10,12,15,17],call:1,came:9,camilleri:[2,9,11],can:[2,3,8,9,10,17],candid:[3,10,12],captur:3,carin:3,cassar:[2,9,11],cb:2,champagn:[3,13],chang:[3,15],channel:[3,8,9,10,12],chat:9,check:2,cheung:4,choos:[1,2],classif:[10,13],clin:7,cnn:1,code:[3,9],coher:[4,13],column:[2,4],com:[3,7,9],combin:9,common:2,comparison:4,complet:8,complex:3,comprehens:13,compress:[3,8,12,13],comput:[1,2,3,8],conceptu:3,confer:3,connect:[1,4,13],consid:8,constrain:[4,13],constraint:[],contact:9,contain:[3,8],context:3,contextu:0,control:[1,3,4,6,10,11,14,15],convdip:[],conveni:[1,3,4,5,7,8,9,10,12,15],converg:[3,7,9],convergence_criterion:3,convert:2,convolut:[1,13],corner:2,correl:[3,4],correlation_criterion:1,correspond:3,cortic:9,cosamp:[8,13],cosine_similar:1,cost:3,cours:[3,9],cov:1,covari:[1,2,3,4,9,13,15],covcnn:1,creat:[1,2,3,10,17],create_gener:1,criteria:9,criterion:[1,7,8,9,10],cross:2,csd:9,current:[0,9,13],curv:[2,10],d:[3,4,5,7,8,9,12],dai:8,dale:9,data:[1,2,3,4,5,6,7,8,9,10,11,12,14,15,17],daunizeau:3,decreas:2,delet:2,delete_from_list:2,describ:[7,8],descript:5,design:4,detail:7,determin:8,develop:[9,12],dictionari:10,dinh:[],dipol:[1,2,3,8,9,10,12],discret:7,distanc:2,distribut:[7,15],divis:[3,4],doc:[],document:[16,17],doesburg:4,don:10,donoho:[8,12],drop_off:15,dspm:[9,13],duart:[8,12],dure:1,dynam:[9,13],e:[1,2,3,4,8,9,10],each:[2,13],eeg:[1,2,3,4,6,7,8,9,10,11,12,14],eigenspac:[4,13],eigenvalu:2,eigenvector:10,either:2,eldar:[8,12],electr:7,electromagnet:[5,7,10],element:2,eloreta:[7,9,13],els:[2,12],em:3,em_champagn:3,empirical_bay:3,enforc:[],engin:7,environ:4,ep:3,epifocu:13,epilept:5,epoch:[1,2],epochsarrai:2,epsilon:[1,3],equal:3,error:7,esim:1,esinet:[1,2],esmcmv:13,esmv:[4,13],estim:[1,3,6,8,9,10,11,13,14],estimates__:[],et:[7,11],euclidean:2,euclidean_dist:2,european:3,eusipco:3,evalu:3,evenli:4,evoekd:2,evok:[1,2,3,4,5,6,7,8,9,10,11,12,14,15,17],evokedarrai:[2,6,11,14],exact:[7,13],exactlow:7,exp:7,expect:3,explain:12,express:9,extens:12,f:[8,12],fabri:[2,9,11],fals:[2,3],fast:9,fc:1,file:16,filter:[1,2,4],filter_norm:2,find:[2,3,7,17],find_corn:2,fischl:9,fista:[9,13],fit:8,fmri:9,focuss:[0,14],formal:3,formula:[3,9],forward:[1,2,3,4,5,6,7,8,9,10,11,12,14,15,17],framework:3,free:2,friston:3,from:[1,3,8,9,12,17],frontier:[],fulli:[1,13],futur:17,g:[1,2,3,4,5,9,11],gain:1,gamma:[3,13],garnero:7,gcv:2,gener:[1,2,16],get_alpha:2,get_smooth_prior_cov:3,gilbert:[8,12,13,15],github:3,given:[2,17],gorodnitski:[],gpt:9,gpu:1,grad_f:9,gradient:[3,9],grech:[2,9,11],guess:9,h:3,ha:[2,13],halgren:9,harmon:8,harrison:3,has_multiple_oper:2,hashemi:3,hauf:3,have:[1,9,17],hecker:[9,10,12],here:17,hidden:1,high:9,higher:[2,3,4,10,13],hocmv:[4,13],hold:[2,8],how:[9,12,16],howev:16,html:16,http:[3,7],hunold:[],hyperparamet:3,i:[5,8,9,10],idc:2,idx:2,ieee:[3,4,7,8,10,12],ilmoniemi:10,imag:[3,4,7,9,13],imlement:[0,8],imlpement:8,implement:[3,8,9],impos:9,improv:3,inaccur:8,includ:[10,12],include_singleton:12,incomplet:8,incorpor:10,increas:2,increasingli:10,index:2,indic:2,inform:[3,8,9,12,16],initi:9,inn:4,inner:3,input:[1,9],instal:[],instanc:[1,3,4,5,7,8,9,10,12,13,15,17],integ:[3,4,8],integr:[],intend:16,interact:7,interest:9,intern:[7,9],introduc:7,invari:[4,13],invers:[0,1,2,4,5,7,8,9,10,11,12,15],inverse_oper:[2,3],inverseoper:2,invert:[1,2,3,4,5,6,7,8,9,10,11,12,14,15],iter:[3,8,9,12],its:[2,13],itself:[1,2,3,4,5,7,8,9,10,12,15],j:[2,3,4,8,9,10,11,12],jazz:[10,13],ji:3,jointli:8,jone:4,jonmohamadi:4,journal:[2,7,9,11],k:[2,3,4,8,9,10,11,12,14],khan:[],kiebel:3,kozhemiako:4,krueger:4,kuznetsova:4,kwarg:[1,2,3,4,5,7,8,9,10,12,15],l1:[9,13],l1_reg:9,l1l2:9,l2:[2,9,13],l2_norm:2,l2_reg:9,l:[2,3,7,8,9,10,12],l_new:2,landi:5,lantz:5,laplacian:3,largest:2,laura:[13,15],layer:1,lcmv:[4,13],leadfield:[1,2,3,7],leahi:10,learn:[1,3],learning_r:1,least:1,length:[2,4],less:8,level:2,lewin:9,like:[2,3,10],limit:[],linear:[7,9],linearli:[4,13],list:2,littl:9,liu:9,local:[3,5,7,10,13,15],locat:3,loop:3,loreta:[],loss:[1,3],low:[3,7,13],low_snr_champagn:3,lower:10,lowsnr:3,lstm:1,luka:[9,10,12],m:[1,2,3,4,5,8,9,10,11,12],magazin:[4,10],magnetometri:[4,13],mai:2,major:3,make:[10,17],make_gamma_map_inverse_oper:3,make_inverse_oper:[1,2,3,4,5,7,8,9,10,12,15,17],make_jazz:10,make_source_map_inverse_oper:3,map:[3,7,9,10,13],marqui:[7,9],match:0,matching_pursuit:8,matrix:[1,2,3,4,7,8,9,10,12,15],mattout:3,max_it:[3,6,7,9,11,14],maxim:3,maximum:[1,3,9,10,13],mce:9,mcmv:[4,13],me:9,measur:[3,8,9,12,13],meg:[3,4,7,9,10],member:[],memori:[1,13],menendez:5,method:[2,3,5,7,9,10],michel:5,milenkov:8,min_chang:9,min_x:9,minim:[1,2],minimum:[3,4],minimum_norm:[],minimum_norm_estim:9,mishali:8,miss:9,mm:3,mm_champagn:3,mne:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17],mne_obj:2,model:[1,2,3,4,5,6,7,8,9,10,11,12,14,15,17],modifi:4,moiseev:4,monoton:2,more:[2,10],mosher:10,most:15,msp:[3,13],much:12,multi:[8,13],multipl:[2,3,4,10,13],muscat:[2,9,11],music:[],mvab:[4,13],my:10,n:[3,4,9,10],n_dense_unit:1,n_filter:1,n_lstm_unit:1,n_order:[1,10,14],n_reg_param:2,n_sensor:3,n_sourc:1,n_time:12,n_timepoint:1,nagarajan:3,name:[1,3,4,5,7,8,9,10,12,15],ndarrai:[1,2,3,8,9,10,12,15],needel:8,neighborhood:10,net:[1,2],neural:3,neuroengin:[2,9,11],neuroimag:[3,4,9,10],neuron:[1,7,9],neurosci:[],nois:[1,3,9,15],noise_cov:[3,7,9,15],none:[2,3,9,15],noninvas:5,norm:2,normal:[4,13],number:[1,2,3,8,9,10],numpi:[1,2,3,8,9,10,12,15],nune:4,nurislamova:4,o:8,object:[1,2,3,4,5,6,7,8,9,10,11,12,14,15],observ:[],off:3,omp:[8,12,13],one:2,onli:12,open:9,openai:9,oper:[1,2,3,4,5,7,8,9,10,12,15,17],optim:[1,2,3,7],optimum_idx:2,option:[3,9],order:[3,4,10,13],orient:3,origin:[1,16],orthogon:[8,12,13],ossadtchi:4,other:[],otherwis:[2,10],out:2,output:9,over:17,owen:3,own:[10,13],p:[2,3,5,9,11],packag:17,parallel:1,param:[2,7,9],paramet:[1,2,3,4,5,6,7,8,9,10,11,12,14,15],parametr:[9,13],part:7,pascual:[7,9],patch:[12,15],path:2,patienc:1,per:[2,8],percentag:10,percentil:11,perform:[1,3,4],pharmacol:7,phase:[4,13],phillip:3,pick_typ:2,pii:7,pip:17,pleas:9,plot:[2,17],point:[1,2,3],posit:[4,8],posteriori:[3,13],poudel:4,pp:3,predict:1,prep_leadfield:2,prepar:2,prepare_forward:2,preprint:7,principl:4,prior:[3,7,9,13],problem:[1,2,3,4,7,9,11],process:[3,4,8,10,12],product:2,program:[6,11,14],project:[1,10],promot:[],prompt:9,provid:9,prune:3,pruning_thresh:3,pursu:[3,10],pursuit:0,python:[1,3,4,5,7,8,9,10,12,15],quadrat:7,r:[2,4,5,7,9,10,11],r_val:2,ram:1,random:[8,12],rang:1,rao:[],rap:[10,13],rate:1,ratio:1,raw:2,re:[],real:3,recent:4,reciproc:[4,13],recipsiico:[4,13],reconstruct:[3,4,8,9],recov:8,recoveri:[8,12],recurs:[10,13],reduc:[8,13],refer:[2,3,4,5,7,8,9,10,11,12,16],referenc:2,regress:15,regular:[1,2,3,4,5,6,7,8,9,10,11,12,15],regularis:2,regularisation_method:2,regularise_gcv:2,regularise_lcurv:2,regularise_product:2,rehabilit:[2,9,11],rembo:[8,13],repetit:1,requir:9,residu:8,resolut:[7,9],result:17,review:[2,7,9,11],ribari:4,robinson:4,robust:[3,4],rtype:[],run:[1,9],rv_thresh:[8,14],s1053811920309150:7,s:[2,3,4,5,7,8,9,10,11,13],s_focuss:11,sam:[4,13],same:1,sampl:[1,8,13],samuelsson:[],sarva:10,save:2,scale:[1,2],scaler:1,scienc:[7,9],sciencedirect:7,search:8,segment:9,sekihara:3,select:[1,2,8,10],self:[1,2,3,4,5,7,8,9,10,12,15],sens:[3,8,12,13],sensor:3,septemb:3,sereno:9,serial:1,set:[1,3,8],shape:[3,9],shift:[4,13],should:[4,16],show:[],shrink:0,shrinkag:9,siam:9,side:2,signal:[1,3,4,8,10,12,13],similar:3,simpl:2,simpli:17,simul:[1,3,5],simultan:[8,12,13],singl:[12,13],size:1,size_validation_set:1,sloreta:[3,7,13],slower:2,small:3,smaller:[1,8],smap:7,smooth:[1,3,10],smooth_matching_pursuit:12,smoother:[3,10],smoothness_ord:3,smoothness_prior:3,smp:[12,13],smv:[4,13],snr:[1,3,13],snr_rang:1,soft:9,soft_threshold:9,solut:[0,1,2,4,5,7,8,9,10,12,15],solv:[2,4,7,9,11],solve_p:1,solve_p_wrap:1,solver:[1,2,3,4,5,7,8,9,10,12,15,17],solver_nam:2,solverbackusgilbert:15,solverbc:3,solverchampagn:3,solvercnn:1,solvercosamp:8,solvercovcnn:1,solverdspm:9,solvereloreta:7,solveremchampagn:3,solverepifocu:5,solveresmv:4,solverfc:1,solvergammamap:3,solvergammamapmsp:3,solverhocmv:4,solverisubsmp:12,solverjazzmus:10,solverlaura:15,solverlcmv:4,solverloreta:7,solverlowsnrchampagn:3,solverlstm:1,solvermcmv:4,solverminimuml1l2norm:9,solverminimuml1norm:9,solverminimuml1normgpt:9,solvermmchampagn:3,solvermn:9,solvermus:10,solvermvab:4,solveromp:8,solverrapmus:10,solverrecipsiico:4,solverrembo:8,solversam:4,solversloreta:7,solversmap:7,solversmp:12,solversmv:4,solversomp:8,solversourcemap:3,solversourcemapmsp:3,solversp:8,solverssmp:12,solverssp:8,solversubsmp:12,solvertemchampagn:3,solvertrapmus:10,solverwmn:9,solverwnmv:4,some:[0,2,16,17],sometim:1,somp:13,sooner:8,sourc:[1,2,3,4,6,8,9,10,11,13,14],source_cov:9,source_estim:[1,2,3,4,5,7,8,9,10,12,15],source_mat:2,source_to_object:2,sourceestim:[1,2,3,4,5,6,7,8,9,10,11,12,14,15],sp:[8,13],spars:[3,8,13],sparsifi:9,sparsiti:[3,8,10],spatial:[4,7],spatio:[0,3,13],spatiotempor:[],sphinx:16,ssmp:[12,13],ssp:8,stamp:0,stampc:14,standard:[4,7,13],statist:[9,13],stc:[1,2,3,4,5,6,7,8,9,10,11,12,14,15,17],stc_focuss:[6,11,14],steep:15,stenroo:10,stop:[1,7,8,9,10],stop_crit:[7,10],store:16,str:[1,2,3,10],strength:9,structur:[3,8,12],subsmp:[12,13],subspac:[8,12,13],suppl:7,surfac:9,svd:10,synthet:[4,13],system:3,t:[2,3,4,5,9,10,11],tanh:1,task:9,teboul:9,technic:7,tem:3,tem_champagn:3,tempor:[0,3,13],term:[1,3,13],text:[],thei:2,theori:[8,12],therefor:8,theta:3,thi:[1,2,3,8,9,10,13,15,16],threshold:[1,3,8,9,12],through:3,thumbs_up:[],time:[1,2,3,8,9,10,13],tol:9,toler:9,tomographi:[7,13],too:9,top:10,topographi:5,trade:3,train:1,train_model:1,transact:[3,7,8,10,12],trap:[10,13],triangl:2,tropp:[8,12],trujillo:3,truncat:[10,13],tupl:1,tutori:17,two:[2,4],type:[1,2,3,4,5,6,7,8,10,11,12,14,15],u:4,ultim:1,unifi:3,unit:[2,4],unpack:2,unpack_data_obj:2,unpublish:10,unscal:1,until:[1,3],up:9,us:[1,2,3,8,9,10,13,16,17],use_last_alpha:2,v:4,valid:[1,2],valu:2,van:4,vanrumst:[2,9,11],var_thresh:12,vari:1,varianc:[4,8,12,13],variou:[],vector:[1,3,8,13],veen:4,verbos:[1,2,3,4,6,7,8,9,10,11,12,14,15],versatil:4,via:[8,12],vorobyov:4,w:[4,8,9],wa:8,weight:[4,7,9],weight_norm:4,weird:9,weiss:4,welcom:17,were:9,where:2,which:[1,2,3,10],wipf:3,wmne:9,wnmv:[4,13],wrapper:1,write:9,wrop:15,www:7,x0:9,x:[2,3,9],x_hat:[1,3,8,9,10,12],x_true:1,xue:3,y:[3,4,8,9,10,12],y_est:1,y_scale:[1,9],you:[1,9,16,17],zero:[3,7],zervaki:[2,9,11],zoo:3},titles:["Adapters","Artificial Neural Networks","Base Class","Bayesian Inverse Solutions","Beamformers","EPIFOCUS","FOCUSS","LORETA","Matching Pursuit","Minimum Norm-Type","MUSIC","Shrinking FOCUSS","Smooth Matching Pursuit","Solvers","Spatio-Temporal Matching Pursuit Contextualizer (STAMP-C)","Weighted Resolution Optimization","Help","<strong>invert</strong> - A high-level M/EEG Python library for EEG inverse solutions"],titleterms:{"class":2,A:17,adapt:0,algorithm:[],api:[],artifici:[1,13],base:2,bayesian:[3,13],beamform:[4,13],c:14,contextu:14,demo:[],document:[],eeg:17,epifocu:5,estim:[],famili:[],focuss:[6,11],full:13,greedi:[],help:16,high:17,instal:17,invers:[3,13,17],invert:17,level:17,librari:17,list:13,loreta:[7,13],m:17,match:[8,12,13,14],minimum:[9,13],music:[10,13],network:[1,13],neural:[1,13],norm:[9,13],optim:[13,15],other:13,pursuit:[8,12,13,14],python:17,quickstart:17,refer:[],resolut:[13,15],shrink:11,smooth:[12,13],solut:[3,13,17],solver:13,spatio:14,stamp:14,subspac:[],techniqu:[],tempor:14,type:[9,13],w2v:[],weight:[13,15]}})