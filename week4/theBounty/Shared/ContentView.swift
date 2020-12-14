//
//  ContentView.swift
//  Shared
//
//  Created by Ismael Suarez on 12/12/20.
//

import SwiftUI

struct ContentView: View {
    @Binding var document: theBountyDocument

    var body: some View {
        TextEditor(text: $document.text)
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView(document: .constant(theBountyDocument()))
    }
}
