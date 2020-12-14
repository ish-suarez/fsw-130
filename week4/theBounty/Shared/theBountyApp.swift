//
//  theBountyApp.swift
//  Shared
//
//  Created by Ismael Suarez on 12/12/20.
//

import SwiftUI

@main
struct theBountyApp: App {
    var body: some Scene {
        DocumentGroup(newDocument: theBountyDocument()) { file in
            ContentView(document: file.$document)
        }
    }
}
