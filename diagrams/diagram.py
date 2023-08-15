from diagrams import Cluster, Diagram
from diagrams.generic.os import Windows, Android
from diagrams.generic.network import Switch
from diagrams.generic.compute import Rack
from diagrams.aws.database import RDS
from diagrams.generic.database import SQL

with Diagram("Web3 Music UML", show=False, direction="TB"):
    
    # Frontend subgraph
    with Cluster("Frontend"):
        website = Windows("Website - Nextjs")
        artist = Rack("Artist")
        public = Switch("Public")
        dashboard = Rack("Dashboard")
        mobile_app = Android("Mobile App")
        event_organizer = Rack("EventOrganizer")
        profile = Rack("Profile")
        events_handle = Rack("Events handle")
        api_client = Rack("API Client")

        website >> artist
        website >> public >> dashboard
        mobile_app >> event_organizer
        event_organizer >> profile
        event_organizer >> events_handle
        artist >> profile
        artist >> events_handle
        profile >> api_client
        events_handle >> api_client
        api_client >> dashboard

    # Backend subgraph
    with Cluster("Backend"):
        load_balancer = Switch("Load Balancer")
        web_server1 = Rack("Web Server1")
        web_server2 = Rack("Web Server2")
        node_js1 = Rack("Node.js")
        node_js2 = Rack("Node.js")
        service_layer = Rack("Service Layer")
        cache = RDS("cache")  # Using RDS as a general representation
        database = SQL("Database")  # Using SQL for generic database

        load_balancer >> web_server1 >> node_js1
        load_balancer >> web_server2 >> node_js2
        node_js1 >> service_layer
        node_js2 >> service_layer
        service_layer >> cache
        service_layer >> database
        cache >> database

    # Blockchain subgraph
    with Cluster("Blockchain"):
        stacks_network = RDS("Stacks Network")  # Using RDS as a general representation
        smart_contracts = Rack("Smart Contracts")
        ipfs_gaia = Rack("IPFS - GAIA")
        oracle = Rack("Oracle")
        bitcoin_l1 = Rack("Bitcoin L1")
        ordinals = Rack("Ordinals")
        inscriptions_metadata = Rack("Inscriptions Metadata")
        top_artist_inscriptions = Rack("Top Artist Inscriptions")
        artist_profile = Rack("Artist Profile")

        smart_contracts >> stacks_network
        ipfs_gaia >> stacks_network
        oracle >> stacks_network
        bitcoin_l1 >> ordinals >> inscriptions_metadata >> top_artist_inscriptions >> artist_profile

    # Wallet Connect subgraph
    with Cluster("Wallet Connect"):
        popup = Windows("Popup")
        metamask = Rack("Metamask")
        hiro = Rack("Hiro")
        phantom = Rack("Phantom")

        popup >> metamask
        popup >> hiro
        popup >> phantom

    # Interconnections
    api_client >> load_balancer
    service_layer >> smart_contracts
    service_layer >> ipfs_gaia
    service_layer >> oracle
    cache >> database
    database >> ipfs_gaia
    website >> smart_contracts
    smart_contracts >> artist
    website >> smart_contracts
    smart_contracts >> website
    smart_contracts >> database
    database >> artist_profile
    website >> popup
